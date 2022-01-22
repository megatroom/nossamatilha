import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

export default function Hero({ children }: Props) {
  return <div>{children}</div>;
}

const BgWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  z-index: -1;
`;

const LogoWrap = styled.div`
  position: absolute;
  top: 100px;
  left: calc((100vw - 951px) / 1.5);
  padding: 0 8px;
`;

interface HeroBodyProps {
  bgImage: StaticImageData;
  logoImage: StaticImageData;
}

export function HeroBody({ bgImage, logoImage }: HeroBodyProps) {
  return (
    <>
      <BgWrap>
        <Image
          alt="Imagem de fundo"
          src={bgImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BgWrap>
      <LogoWrap>
        <Image
          src={logoImage}
          alt="Nossa Matilha - passeio educativo"
          layout="intrinsic"
          width={951}
          height={400}
        />
      </LogoWrap>
    </>
  );
}
