import Image from "next/image";
import styled from "@emotion/styled";
import Typography, { TypographyProps } from "@mui/material/Typography";
import SiteContainer from "../../atoms/SiteContainer";
import SiteSectionTitle from "../../molecules/SiteSectionTitle";
import Block1 from "./img/block-1.png";
import Block2 from "./img/block-2.png";
import Block3 from "./img/block-3.png";

const items = [
  {
    id: 1,
    image: Block1,
    title: "Adestramento Positivo",
    description: "A melhor educação para o seu melhor amigo.",
  },
  {
    id: 2,
    image: Block2,
    title: "Pet Sitter",
    description: "Cuidado do seu cão no conforto da sua casa.",
  },
  {
    id: 3,
    image: Block3,
    title: "Passeios Educativos",
    description: "Passeios com reforço positivo.",
  },
];

const Root = styled.div`
  margin: 120px 0;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
`;

const Item = styled.div`
  max-width: 280px;
`;

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export default function Features() {
  return (
    <Root>
      <SiteContainer>
        <SiteSectionTitle id="features">Serviços Especiais</SiteSectionTitle>
        <Row>
          {items.map(({ id, image, title, description }) => (
            <Item key={id}>
              <Image src={image} alt={title} width={180} height={150} />
              <Title variant="h5" gutterBottom>
                {title}
              </Title>
              <Description>{description}</Description>
            </Item>
          ))}
        </Row>
      </SiteContainer>
    </Root>
  );
}
