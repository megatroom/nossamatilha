import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ButtonProps } from "@mui/material";

const Root = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  height: 460px;
`;

const DotContainer = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;
`;

interface DotProps extends ButtonProps {
  selected: boolean;
}

const DotButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  outline: 0;
  border: 0;
  width: 30px;
  height: 30px;
  margin-right: 7.5px;
  margin-left: 7.5px;
  display: flex;
  align-items: center;

  &:after {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    content: "";

    ${({ selected }: DotProps) =>
      selected
        ? css`
            background-color: rgba(173, 127, 95, 1);
            opacity: 1;
          `
        : css`
            background-color: #efefef;
          `}
  }
`;

interface CarrouselItem {
  id: number;
  image: StaticImageData;
}

interface Props {
  items: CarrouselItem[];
}

export default function Carrousel({ items }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div>
      <Root ref={emblaRef}>
        <Container>
          {items.map(({ id, image }) => (
            <Slide key={id}>
              <Image
                src={image}
                alt={`Slide ${id}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="blur"
              />
            </Slide>
          ))}
        </Container>
      </Root>
      <DotContainer>
        {items.map(({ id }, index) => (
          <DotButton
            key={id}
            type="button"
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </DotContainer>
    </div>
  );
}
