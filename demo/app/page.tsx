import { Demos } from '@/components/Demos'

export default function Home() {
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
        <Demos />
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
