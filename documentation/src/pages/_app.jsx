import { Prose } from '@/components/Prose'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <Prose>
      <Component {...pageProps} />
    </Prose>
  )
}
