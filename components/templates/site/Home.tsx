import SiteNavbar from 'components/organisms/SiteNavbar'
import Hero from 'components/organisms/Hero'
import Features from 'components/organisms/Features'
import Footer from 'components/organisms/SiteFooter'
import Testimonials from 'components/organisms/Testimonials'
import ContactCallout from 'components/organisms/ContactCallout'
import AddressWidget from '../../organisms/AddressWidget'
import { DbUser } from 'hooks/services/users'

interface HomeProps {
  user?: DbUser
}

export default function Home({ user }: HomeProps) {
  return (
    <>
      <SiteNavbar user={user} />
      <Hero />
      <main>
        <Features />
        <Testimonials />
        <ContactCallout />
        <AddressWidget />
      </main>
      <Footer />
    </>
  )
}
