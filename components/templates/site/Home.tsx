import SiteNavbar from "../../organisms/SiteNavbar";
import Hero from "../../organisms/Hero";
import Features from "../../organisms/Features";
// import Showroom from "../../organisms/Showroom";
import Footer from "../../organisms/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <main>
        <Features />
        {/* <Showroom /> */}
      </main>
      <Footer />
    </>
  );
}
