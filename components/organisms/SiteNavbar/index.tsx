import Image from "next/image";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PetsIcon from "@mui/icons-material/Pets";
import Button from "../../atoms/Button";
import SiteContainer from "../../atoms/SiteContainer";
import LogoImg from "./img/nossa-matilha-navbar-logo.png";

const Root = styled.header`
  padding: 8px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function SiteNavbar() {
  const theme = useTheme();
  const isDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root>
      <SiteContainer>
        <Content>
          <nav>
            <Image
              src={LogoImg}
              alt="Nossa Matilha Logo"
              width={163}
              height={60}
            />
          </nav>
          <nav>
            <Button variant="outlined" startIcon={<PetsIcon />}>
              {isDownSM ? "Cliente" : "Área do cliente"}
            </Button>
          </nav>
        </Content>
      </SiteContainer>
    </Root>
  );
}
