import { Topbar } from './components/Topbar'
import { Hero } from './components/Hero'
import { Templates } from './components/Templates'
import { Customize } from './components/Customize'
import { IO } from './components/IO'
import { Payments } from './components/Payments'
import { Library } from './components/Library'
import { Specs } from './components/Specs'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

export function App () {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <Topbar />

      <main id="main">
        <Hero />
        <Templates />
        <Customize />
        <IO />
        <Payments />
        <Library />
        <Specs />
        <Download />
      </main>

      <Footer />
    </>
  )
}
