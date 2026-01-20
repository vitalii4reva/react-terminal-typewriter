'use client'

import { useTypewriter } from 'react-terminal-typewriter'
import { DemoCard } from './DemoCard'

export function Demos() {
  return (
    <>
      <BasicDemo />
      <LoopDemo />
      <TerminalDemo />
      <SlowTypingDemo />
      <FastTypingDemo />
      <CodeDemo />
    </>
  )
}

function BasicDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'Hello, World!',
    delay: 100,
    loop: true,
    loopDelay: 2000,
    deleteDelay: 50
  })

  return (
    <DemoCard
      title="Basic Usage"
      description="Simple typewriter effect with loop enabled"
      code={`const { displayText } = useTypewriter({
  text: 'Hello, World!',
  delay: 100,
  loop: true
})`}
    >
      <div className="demo-output large">
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}

function LoopDemo() {
  const { displayText, cursorBlinkSpeed, isDeleting } = useTypewriter({
    text: 'React Terminal Typewriter',
    delay: 80,
    loop: true,
    loopDelay: 2000,
    deleteDelay: 40
  })

  return (
    <DemoCard
      title="Loop Mode with Delete State"
      description="Text types, pauses, deletes, and repeats. Color changes when deleting."
      code={`const { displayText, isDeleting } = useTypewriter({
  text: 'React Terminal Typewriter',
  loop: true,
  loopDelay: 2000,
  deleteDelay: 40
})

// Use isDeleting to change styles
<span style={{ color: isDeleting ? 'orange' : 'green' }}>
  {displayText}
</span>`}
    >
      <div className="demo-output large" style={{ color: isDeleting ? '#f0883e' : '#00aa66' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}

function TerminalDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'npm install react-terminal-typewriter',
    delay: 50,
    startDelay: 500,
    loop: true,
    loopDelay: 3000,
    deleteDelay: 30
  })

  return (
    <DemoCard
      title="Terminal Style"
      description="Classic terminal command prompt effect"
      code={`const { displayText } = useTypewriter({
  text: 'npm install react-terminal-typewriter',
  delay: 50,
  startDelay: 500,
  loop: true
})`}
    >
      <div className="demo-output terminal">
        <span className="prompt">$</span>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}

function SlowTypingDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'Slow... and... dramatic...',
    delay: 200,
    cursorBlinkSpeed: 1200,
    loop: true,
    loopDelay: 2500,
    deleteDelay: 100
  })

  return (
    <DemoCard
      title="Slow Typing"
      description="Dramatic effect with slower typing and cursor blink"
      code={`const { displayText } = useTypewriter({
  text: 'Slow... and... dramatic...',
  delay: 200,
  cursorBlinkSpeed: 1200,
  loop: true
})`}
    >
      <div className="demo-output large" style={{ color: '#a371f7' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}

function FastTypingDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'Speed typing demonstration with fast character output!',
    delay: 30,
    cursorBlinkSpeed: 400,
    loop: true,
    loopDelay: 1500,
    deleteDelay: 20
  })

  return (
    <DemoCard
      title="Fast Typing"
      description="Quick typing with faster cursor blink"
      code={`const { displayText } = useTypewriter({
  text: 'Speed typing demonstration...',
  delay: 30,
  cursorBlinkSpeed: 400,
  loop: true
})`}
    >
      <div className="demo-output" style={{ color: '#58a6ff' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}

function CodeDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'const greeting = "Hello, Developer!";',
    delay: 60,
    startDelay: 1000,
    loop: true,
    loopDelay: 2000,
    deleteDelay: 40
  })

  return (
    <DemoCard
      title="Code Typing"
      description="Perfect for code snippets and documentation"
      code={`const { displayText } = useTypewriter({
  text: 'const greeting = "Hello, Developer!";',
  delay: 60,
  startDelay: 1000,
  loop: true
})`}
    >
      <div className="demo-output" style={{ color: '#f0883e' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
    </DemoCard>
  )
}
