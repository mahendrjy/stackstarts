import { Prose } from '@/components/Prose'
import { Header } from '@/components/Header'

export function Layout({ children, title, tableOfContents }) {
  return (
    <>
      <Header />

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <article className="py-16 px-2 xl:pr-16">
          <Prose>{children}</Prose>
        </article>
      </div>
    </>
  )
}
