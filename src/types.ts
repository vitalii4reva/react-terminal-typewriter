export interface UseTypewriterOptions {
  /** Text to type */
  text: string
  /** Delay between typing each character (ms) */
  delay?: number
  /** Delay before starting to type (ms) */
  startDelay?: number
  /** Enable loop mode - text will be deleted and retyped */
  loop?: boolean
  /** Delay before starting to delete (ms) */
  loopDelay?: number
  /** Delay between deleting each character (ms) */
  deleteDelay?: number
  /** Cursor blink animation speed (ms) */
  cursorBlinkSpeed?: number
}

export interface UseTypewriterReturn {
  /** Current displayed text */
  displayText: string
  /** Whether currently typing */
  isTyping: boolean
  /** Whether currently deleting */
  isDeleting: boolean
  /** Whether typing is complete (only when loop is false) */
  isComplete: boolean
  /** Cursor blink speed for CSS variable */
  cursorBlinkSpeed: number
}
