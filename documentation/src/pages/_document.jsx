import { Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
