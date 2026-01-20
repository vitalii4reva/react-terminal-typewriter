import { useTypewriter } from 'react-terminal-typewriter'

function BasicDemo() {
  const { displayText, cursorBlinkSpeed, isComplete } = useTypewriter({
    text: 'Hello, World!',
    delay: 100
  })

  return (
    <div className="demo-card">
      <h2>Basic Usage</h2>
      <p className="description">Simple typewriter effect with default settings</p>
      <div className="demo-output large">
        {displayText}
        <span 
          className={`cursor ${isComplete ? 'cursor-hidden' : ''}`}
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText } = useTypewriter({
  text: 'Hello, World!',
  delay: 100
})`}</code>
      </div>
    </div>
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
    <div className="demo-card">
      <h2>Loop Mode</h2>
      <p className="description">Text types, pauses, deletes, and repeats infinitely</p>
      <div className="demo-output large" style={{ color: isDeleting ? '#f0883e' : '#00aa66' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText, isDeleting } = useTypewriter({
  text: 'React Terminal Typewriter',
  loop: true,
  loopDelay: 2000,
  deleteDelay: 40
})`}</code>
      </div>
    </div>
  )
}

function TerminalDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'npm install react-terminal-typewriter',
    delay: 50,
    startDelay: 500
  })

  return (
    <div className="demo-card">
      <h2>Terminal Style</h2>
      <p className="description">Classic terminal command prompt effect</p>
      <div className="demo-output terminal">
        <span className="prompt">$</span>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText } = useTypewriter({
  text: 'npm install react-terminal-typewriter',
  delay: 50,
  startDelay: 500
})`}</code>
      </div>
    </div>
  )
}

function SlowTypingDemo() {
  const { displayText, cursorBlinkSpeed, isTyping } = useTypewriter({
    text: 'Slow... and... dramatic...',
    delay: 200,
    cursorBlinkSpeed: 1200
  })

  return (
    <div className="demo-card">
      <h2>Slow Typing</h2>
      <p className="description">Dramatic effect with slower typing and cursor blink</p>
      <div className="demo-output large" style={{ color: '#a371f7' }}>
        {displayText}
        <span 
          className={`cursor ${!isTyping ? 'cursor-hidden' : ''}`}
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText } = useTypewriter({
  text: 'Slow... and... dramatic...',
  delay: 200,
  cursorBlinkSpeed: 1200
})`}</code>
      </div>
    </div>
  )
}

function FastTypingDemo() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'Speed typing demonstration with fast character output!',
    delay: 30,
    cursorBlinkSpeed: 400
  })

  return (
    <div className="demo-card">
      <h2>Fast Typing</h2>
      <p className="description">Quick typing with faster cursor blink</p>
      <div className="demo-output" style={{ color: '#58a6ff' }}>
        {displayText}
        <span 
          className="cursor"
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText } = useTypewriter({
  text: 'Speed typing demonstration...',
  delay: 30,
  cursorBlinkSpeed: 400
})`}</code>
      </div>
    </div>
  )
}

function CodeDemo() {
  const { displayText, cursorBlinkSpeed, isComplete } = useTypewriter({
    text: 'const greeting = "Hello, Developer!";',
    delay: 60,
    startDelay: 1000
  })

  return (
    <div className="demo-card">
      <h2>Code Typing</h2>
      <p className="description">Perfect for code snippets and documentation</p>
      <div className="demo-output" style={{ color: '#f0883e' }}>
        {displayText}
        <span 
          className={`cursor ${isComplete ? 'cursor-hidden' : ''}`}
          style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
        />
      </div>
      <div className="code-block">
        <code>{`const { displayText, isComplete } = useTypewriter({
  text: 'const greeting = "Hello, Developer!";',
  delay: 60,
  startDelay: 1000
})`}</code>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1 style={{ color: '#00aa66' }}>react-terminal-typewriter</h1>
        <p>
          A lightweight React hook for terminal-style typewriter effects with cursor animation, 
          loop support, and full TypeScript support.
        </p>
        <div>
          <span className="badge">Zero Dependencies</span>
          <span className="badge">TypeScript</span>
          <span className="badge">React 17+</span>
          <span className="badge">~1KB</span>
        </div>
      </header>

      <section className="demos">
        <BasicDemo />
        <LoopDemo />
        <TerminalDemo />
        <SlowTypingDemo />
        <FastTypingDemo />
        <CodeDemo />
      </section>

      <section className="install-section">
        <h2 style={{ marginBottom: '1.5rem' }}>Installation</h2>
        <div className="install-command">
          npm install react-terminal-typewriter
        </div>
        <div className="links">
          <a href="https://github.com/vitalii4reva/react-terminal-typewriter" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/react-terminal-typewriter" target="_blank" rel="noopener noreferrer">
            npm
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>
          Made with ❤️ by <a href="https://github.com/vitalii4reva" target="_blank" rel="noopener noreferrer">Vitalii Petrenko</a>
        </p>
        <p>MIT License</p>
      </footer>
    </div>
  )
}
