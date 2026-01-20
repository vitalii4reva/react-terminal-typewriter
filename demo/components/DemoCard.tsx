'use client'

import { useState, ReactNode } from 'react'

interface DemoCardProps {
  title: string
  description: string
  code: string
  children: ReactNode
}

export function DemoCard({ title, description, code, children }: DemoCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="demo-card">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      {children}
      <button 
        className={`code-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        {isOpen ? 'Hide Code' : 'Show Code'}
      </button>
      {isOpen && (
        <div className="code-block">
          <code>{code}</code>
        </div>
      )}
    </div>
  )
}
