import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useEmblaCarousel from "embla-carousel-react";
import { yellow } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { styled } from "../../../styles/Theme";
import QuoteMark from "../../atoms/QuoteMark";
import { PrevButton, NextButton, DotButton } from "./CarouselButtons";
import { testimonials } from "./data";
import StarIcon from "@mui/icons-material/Star";

const Root = styled("div")({
  position: "relative",
});

const Viewport = styled("div")({
  overflow: "hidden",
  width: "100%",
});

const Container = styled("div")({
  display: "flex",
  userSelect: "none",
  WebkitTouchCallout: "none",
  KhtmlUserSelect: "none",
  WebkitTapHighlightColor: "transparent",
  marginLeft: "-10px",
});

interface SlideProps {
  slidesize: number;
}

const Slide = styled("div")<SlideProps>(({ slidesize }) => ({
  position: "relative",
  minWidth: `${100 / slidesize}%`,
  paddingLeft: "16px",
}));

const SlideInner = styled("div")({
  position: "relative",
  overflow: "hidden",
  minHeight: "190px",
  borderRadius: "8px",
  color: "#fff",
  textAlign: "center",
});

const TestimonialBox = styled("div")({
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, .07)",
  padding: "30px 28px",
  marginBottom: "30px",
});

const TestimonialText = styled(Typography)({});

const Avatar = styled("div")({
  display: "inline-block",
  position: "relative",
});

const AvatarImage = styled("div")({
  display: "inline-block",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  overflow: "hidden",
});

const DotContainer = styled("div")({
  display: "flex",
  listStyle: "none",
  justifyContent: "center",
  padding: "10px 0",
});

function useSlidesToScroll() {
  const theme = useTheme();
  const isDownMD = useMediaQuery(theme.breakpoints.down("md"));
  const isDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  if (isDownSM) {
    return 1;
  }
  if (isDownMD) {
    return 2;
  }

  return 3;
}

export default function Carousel() {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slidesToScroll = useSlidesToScroll();
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll,
    loop: true,
    skipSnaps: false,
  });

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  const dotList = useMemo(() => {
    const dots = [];
    const size = Math.round(testimonials.length / slidesToScroll);
    for (let i = 1; i <= size; i++) {
      dots.push({ id: `dot-page-${i}` });
    }
    return dots;
  }, [slidesToScroll]);

  return (
    <div>
      <Root>
        <Viewport ref={emblaRef}>
          <Container>
            {testimonials.map(({ id, image, name, text }) => (
              <Slide key={id} slidesize={slidesToScroll}>
                <SlideInner>
                  <TestimonialBox>
                    <TestimonialText>{text}</TestimonialText>
                  </TestimonialBox>
                  {image && (
                    <Avatar>
                      <QuoteMark />
                      <AvatarImage>
                        <Image
                          placeholder="blur"
                          src={image}
                          alt={name}
                          width={80}
                          height={80}
                        />
                      </AvatarImage>
                    </Avatar>
                  )}
                  <Typography variant="h5" gutterBottom>
                    {name}
                  </Typography>
                  <div>
                    <StarIcon fontSize="small" sx={{ color: yellow[500] }} />
                    <StarIcon fontSize="small" sx={{ color: yellow[500] }} />
                    <StarIcon fontSize="small" sx={{ color: yellow[500] }} />
                    <StarIcon fontSize="small" sx={{ color: yellow[500] }} />
                    <StarIcon fontSize="small" sx={{ color: yellow[500] }} />
                  </div>
                </SlideInner>
              </Slide>
            ))}
          </Container>
        </Viewport>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Root>
      <DotContainer>
        {dotList.map(({ id }, index) => (
          <DotButton
            key={id}
            type="button"
            selected={index === selectedIndex ? "1" : "0"}
            onClick={() => scrollTo(index)}
          />
        ))}
      </DotContainer>
    </div>
  );
}
