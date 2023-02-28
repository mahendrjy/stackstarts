import { useRouter } from 'next/router'
import { Hero } from '@/components/Hero'
import { Prose } from '@/components/Prose'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'

  return (
    <>
      <Header />

      {isHomePage && <Hero />}

      <div
        id="docs"
        className="relative mx-auto flex max-w-8xl justify-center py-16 sm:px-2 lg:px-8 xl:px-12"
      >
        <article className="px-2 xl:pr-16">
          <Prose>{children}</Prose>
        </article>
      </div>
    </>
  )
}
