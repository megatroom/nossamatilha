import Image from "next/image";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography, { TypographyProps } from "@mui/material/Typography";
import SiteContainer from "../../atoms/SiteContainer";
import LogoImg from "./img/NossaMatilha400.png";
import InstagramIco from "./IconInstagram";

const Root = styled.footer`
  border-top: 1px solid #dddddd6e;
  padding: 1rem 0;
`;

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function SiteFooter() {
  return (
    <Root>
      <SiteContainer>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6}>
            <Image
              alt="Nossa Matilha logo"
              src={LogoImg}
              layout="intrinsic"
              width={400}
              height={168}
            />
          </Grid>
          <Grid item md={6}>
            <Title variant="h6" gutterBottom>
              Redes Sociais
            </Title>
            <div>
              <InstagramIco width="42px" />
            </div>
          </Grid>
        </Grid>
      </SiteContainer>
    </Root>
  );
}
