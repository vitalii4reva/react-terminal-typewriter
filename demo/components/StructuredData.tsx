export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'react-terminal-typewriter',
    description: 'A lightweight React hook for terminal-style typewriter effects with cursor animation, loop support, and full TypeScript support.',
    programmingLanguage: {
      '@type': 'ComputerLanguage',
      name: 'TypeScript',
    },
    runtimePlatform: 'React',
    codeRepository: 'https://github.com/vitalii4reva/react-terminal-typewriter',
    author: {
      '@type': 'Person',
      name: 'Vitalii Petrenko',
      url: 'https://vitalii4reva.com',
      sameAs: [
        'https://github.com/vitalii4reva',
        'https://www.npmjs.com/~vitalii4reva'
      ]
    },
    license: 'https://opensource.org/licenses/MIT',
    keywords: 'react, typewriter, hook, terminal, animation, typescript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    }
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'react-terminal-typewriter Demo',
    description: 'Interactive demo and documentation for react-terminal-typewriter React hook',
    url: 'https://vitalii4reva.github.io/react-terminal-typewriter/',
    author: {
      '@type': 'Person',
      name: 'Vitalii Petrenko',
      url: 'https://vitalii4reva.com'
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'react-terminal-typewriter',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
    </>
  )
}
