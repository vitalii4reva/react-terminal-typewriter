# react-terminal-typewriter

[![npm version](https://badge.fury.io/js/react-terminal-typewriter.svg)](https://www.npmjs.com/package/react-terminal-typewriter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Demo](https://img.shields.io/badge/Demo-Live-green.svg)](https://vitalii4reva.github.io/react-terminal-typewriter/)

A lightweight React hook for terminal-style typewriter effects with cursor animation, loop support, and full TypeScript support.

## 🚀 [Live Demo](https://vitalii4reva.github.io/react-terminal-typewriter/)

See the hook in action with interactive examples showcasing different configurations.

## Features

- 🎯 **Zero dependencies** - only React as peer dependency
- 📝 **TypeScript support** - full type definitions included
- 🔄 **Loop mode** - auto delete and retype text
- ⚡ **Configurable speeds** - separate delays for typing, deleting, and pauses
- 🖱️ **Cursor control** - configurable cursor blink speed
- ⚛️ **React 18+ compatible** - works with StrictMode
- 🪶 **Lightweight** - ~1KB minified

## Installation

```bash
npm install react-terminal-typewriter
```

```bash
yarn add react-terminal-typewriter
```

```bash
pnpm add react-terminal-typewriter
```

## Quick Start

```tsx
import { useTypewriter } from 'react-terminal-typewriter'

function App() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'Hello, World!',
    delay: 100,
    loop: true
  })

  return (
    <h1>
      {displayText}
      <span 
        className="cursor"
        style={{ 
          '--cursor-blink-speed': `${cursorBlinkSpeed}ms` 
        } as React.CSSProperties}
      />
    </h1>
  )
}
```

## API Reference

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `text` | `string` | *required* | Text to type |
| `delay` | `number` | `100` | Delay between typing each character (ms) |
| `startDelay` | `number` | `500` | Delay before starting to type (ms) |
| `loop` | `boolean` | `false` | Enable loop mode - text will be deleted and retyped |
| `loopDelay` | `number` | `2000` | Delay before starting to delete (ms) |
| `deleteDelay` | `number` | `50` | Delay between deleting each character (ms) |
| `cursorBlinkSpeed` | `number` | `800` | Cursor blink animation speed (ms) |

### Return Values

| Value | Type | Description |
|-------|------|-------------|
| `displayText` | `string` | Current displayed text |
| `isTyping` | `boolean` | Whether currently typing |
| `isDeleting` | `boolean` | Whether currently deleting |
| `isComplete` | `boolean` | Whether typing is complete (only when loop is false) |
| `cursorBlinkSpeed` | `number` | Cursor blink speed for CSS variable |

## Examples

### Basic Usage

```tsx
const { displayText } = useTypewriter({
  text: 'Hello, World!'
})

return <p>{displayText}</p>
```

### With Loop

```tsx
const { displayText, isDeleting } = useTypewriter({
  text: 'React Terminal Typewriter',
  loop: true,
  loopDelay: 3000,  // Wait 3s before deleting
  deleteDelay: 30   // Delete faster than typing
})

return (
  <h1>
    {displayText}
    <span className={`cursor ${isDeleting ? 'deleting' : ''}`} />
  </h1>
)
```

### Custom Cursor Styling

```tsx
const { displayText, cursorBlinkSpeed } = useTypewriter({
  text: 'Custom cursor style',
  cursorBlinkSpeed: 500  // Faster blink
})

return (
  <div>
    {displayText}
    <span 
      className="cursor"
      style={{ 
        '--cursor-blink-speed': `${cursorBlinkSpeed}ms` 
      } as React.CSSProperties}
    />
  </div>
)
```

### Cursor CSS

Add this CSS for the blinking cursor effect:

```css
.cursor {
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: currentColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: cursor-blink var(--cursor-blink-speed, 800ms) step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

### Terminal Style Example

```tsx
import { useTypewriter } from 'react-terminal-typewriter'

function Terminal() {
  const { displayText, cursorBlinkSpeed } = useTypewriter({
    text: 'npm install react-terminal-typewriter',
    delay: 50,
    startDelay: 1000
  })

  return (
    <div className="terminal">
      <span className="prompt">$ </span>
      <span className="command">{displayText}</span>
      <span 
        className="cursor"
        style={{ '--cursor-blink-speed': `${cursorBlinkSpeed}ms` } as React.CSSProperties}
      />
    </div>
  )
}
```

## Browser Support

Works in all modern browsers that support ES2020:
- Chrome 80+
- Firefox 74+
- Safari 14+
- Edge 80+

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Author

**Vitalii Petrenko**
- Website: [vitalii4reva.com](https://vitalii4reva.com)
- GitHub: [@vitalii4reva](https://github.com/vitalii4reva)
- npm: [vitalii4reva](https://www.npmjs.com/~vitalii4reva)

## License

MIT © [Vitalii Petrenko](https://vitalii4reva.com)
