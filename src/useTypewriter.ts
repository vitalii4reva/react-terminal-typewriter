'use client'

import { useState, useEffect, useRef } from 'react'
import type { UseTypewriterOptions, UseTypewriterReturn } from './types'

/**
 * React hook for terminal-style typewriter effect
 * 
 * @example
 * ```tsx
 * const { displayText, cursorBlinkSpeed } = useTypewriter({
 *   text: 'Hello, World!',
 *   delay: 100,
 *   loop: true
 * })
 * 
 * return (
 *   <h1>
 *     {displayText}
 *     <span 
 *       className="cursor"
 *       style={{ '--blink-speed': `${cursorBlinkSpeed}ms` }}
 *     />
 *   </h1>
 * )
 * ```
 */
export function useTypewriter({
  text,
  delay = 100,
  startDelay = 500,
  loop = false,
  loopDelay = 2000,
  deleteDelay = 50,
  cursorBlinkSpeed = 800
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const indexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const isRunningRef = useRef(false)

  useEffect(() => {
    isRunningRef.current = true
    indexRef.current = 0
    isDeletingRef.current = false
    setDisplayText('')
    setIsTyping(false)
    setIsDeleting(false)
    setIsComplete(false)

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const tick = () => {
      if (!isRunningRef.current) return

      if (!isDeletingRef.current) {
        // Typing phase
        if (indexRef.current < text.length) {
          indexRef.current++
          setDisplayText(text.slice(0, indexRef.current))
          setIsTyping(true)
          timeoutRef.current = setTimeout(tick, delay)
        } else {
          setIsTyping(false)
          if (loop) {
            // Wait before starting to delete
            timeoutRef.current = setTimeout(() => {
              if (!isRunningRef.current) return
              isDeletingRef.current = true
              setIsDeleting(true)
              tick()
            }, loopDelay)
          } else {
            setIsComplete(true)
          }
        }
      } else {
        // Deleting phase
        if (indexRef.current > 0) {
          indexRef.current--
          setDisplayText(text.slice(0, indexRef.current))
          timeoutRef.current = setTimeout(tick, deleteDelay)
        } else {
          isDeletingRef.current = false
          setIsDeleting(false)
          // Wait before starting to type again
          timeoutRef.current = setTimeout(tick, startDelay)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, startDelay)

    return () => {
      isRunningRef.current = false
      clearTimer()
    }
  }, [text, delay, startDelay, loop, loopDelay, deleteDelay])

  return { displayText, isTyping, isDeleting, isComplete, cursorBlinkSpeed }
}
