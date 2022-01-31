import Image from "next/image";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "../../atoms/Button";
import BgImg from "./img/hero.jpg";
import LogoImg from "./img/NossaMatilha-600x400.png";

interface Props {
  children: React.ReactNode;
}

const BgWrap = styled.div`
  position: relative;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  z-index: -1;
`;

export default function Hero({ children }: Props) {
  return (
    <div>
      <BgWrap>
        <Image
          alt="Imagem de fundo"
          src={BgImg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BgWrap>
      {children}
    </div>
  );
}

const BodyRoot = styled.div`
  position: absolute;
  top: 100px;
  left: calc((100vw - 951px) / 1.5);
  padding: 0 8px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;

export function HeroBody() {
  return (
    <BodyRoot>
      <Image
        src={LogoImg}
        alt="Nossa Matilha - passeio educativo"
        layout="intrinsic"
        width={951}
        height={400}
      />
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button
            isHero
            onClick={() => {
              document.querySelector("#features").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Saiba mais
          </Button>
          <Button color="secondary" isHero>
            Agendar visita
          </Button>
        </Stack>
      </Toolbar>
    </BodyRoot>
  );
}
