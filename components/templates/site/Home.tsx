import SiteNavbar from '../../organisms/SiteNavbar'
import Hero from '../../organisms/Hero'
import Features from '../../organisms/Features'
import Footer from '../../organisms/SiteFooter'
import Testimonials from '../../organisms/Testimonials'
import ContactCallout from '../../organisms/ContactCallout'

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <main>
        <Features />
        <Testimonials />
        <ContactCallout />
      </main>
      <Footer />
    </>
  )
}
