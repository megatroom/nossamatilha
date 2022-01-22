import BgImg from "./hero.jpg";
import LogoImg from "./NossaMatilha-600x400.png";
import Hero, { HeroBody } from "../../molecules/Hero";

export default function Home() {
  return (
    <>
      <Hero>
        <HeroBody bgImage={BgImg} logoImage={LogoImg} />
      </Hero>
    </>
  );
}
