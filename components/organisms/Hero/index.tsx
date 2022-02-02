import Image from "next/image";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "../../../styles/Theme";
import Button from "../../atoms/Button";
import Underline from "../../atoms/Underline";
import SiteContainer from "../../atoms/SiteContainer";
import BgImgSmall from "./img/slider-pic20.png";
import BgImgBig from "./img/slider-pic3.png";

const Root = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100vh",
  maxHeight: "800px",
  // zIndex: -2,
  // backgroundColor: "tomato",

  [theme.breakpoints.down("lg")]: {
    maxHeight: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "400px",
  },

  button: {
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      fontSize: "1rem",
    },
  },
}));

const BgWrap = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100vh",
  maxHeight: "800px",
  overflow: "hidden",
  zIndex: -1,

  [theme.breakpoints.down("lg")]: {
    maxHeight: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}));

const Container = styled(SiteContainer)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-end",
  },
}));

const BodyRoot = styled("div")(({ theme }) => ({
  maxWidth: "520px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    maxWidth: "400px",
    textAlign: "center",
    margin: "0 auto",
  },
}));

const Toolbar = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "3.75rem",
  fontWeight: 700,
  marginBottom: 32,

  [theme.breakpoints.down("sm")]: {
    marginBottom: 24,
    fontSize: "2rem",
  },
}));

export default function Hero() {
  const theme = useTheme();
  const isDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root>
      <BgWrap>
        {isDownSM ? (
          <Image
            alt="Silvia com dois cachorros"
            src={BgImgSmall}
            layout="fill"
            objectFit="contain"
            objectPosition="top center"
            quality={100}
          />
        ) : (
          <Image
            alt="Silvia com dois cachorros"
            src={BgImgBig}
            layout="fill"
            objectFit="contain"
            objectPosition="top right"
            quality={100}
          />
        )}
      </BgWrap>
      <Container>
        <BodyRoot>
          <div>
            <Title variant="h1">
              A melhor <Underline>educação</Underline> para seu melhor amigo
            </Title>
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
          </div>
        </BodyRoot>
      </Container>
    </Root>
  );
}
