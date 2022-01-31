import Hero, { HeroBody } from "../../organisms/Hero";
import Navbar from "../../molecules/SiteNavbar";
import Features from "../../organisms/Features";
import Showroom from "../../organisms/Showroom";
import Footer from "../../organisms/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero>
        <Navbar />
        <HeroBody />
      </Hero>
      <main>
        <Features />
        <Showroom />
      </main>
      <Footer />
    </>
  );
}

/*
export default function Home() {
  return (
    <>
      <div>
        <Hero bgImage={BgImg}>
          <SiteNavbar />
          <HeroBody logoImage={LogoImg} />
        </Hero>
      </div>
      <div>
        <Container maxWidth="sm">
          <Features />
        </Container>
      </div>
    </>
  );
}
*/
