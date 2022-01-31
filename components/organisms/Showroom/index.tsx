import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SiteContainer from "../../atoms/SiteContainer";
import SiteSectionTitle from "../../molecules/SiteSectionTitle";
import Carrousel from "../../molecules/Carrousel";
import SlideImg01 from "./img/slide-01.jpg";
import SlideImg02 from "./img/slide-02.jpg";
import SlideImg03 from "./img/slide-03.jpg";

const Root = styled.div`
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`;

const Content = styled.div``;

const featureList = [
  {
    id: 1,
    icon: <HealthAndSafetyOutlinedIcon />,
    title: "Reabilitação",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe eligendi nesciunt facere. Esse eligendi quo quam perferendis earum nam, repellendus corporis eum exercitationem nostrum, quos recusandae at commodi maxime!",
  },
  {
    id: 2,
    icon: <SpaOutlinedIcon />,
    title: "Desfazer traumas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe eligendi nesciunt facere. Esse eligendi quo quam perferendis earum nam, repellendus corporis eum exercitationem nostrum, quos recusandae at commodi maxime!",
  },
  {
    id: 3,
    icon: <SchoolOutlinedIcon />,
    title: "Reeducação",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe eligendi nesciunt facere. Esse eligendi quo quam perferendis earum nam, repellendus corporis eum exercitationem nostrum, quos recusandae at commodi maxime!",
  },
];

const imageList = [
  { id: 1, image: SlideImg01 },
  { id: 2, image: SlideImg02 },
  { id: 3, image: SlideImg03 },
];

export default function Showroom() {
  const theme = useTheme();

  return (
    <SiteContainer>
      <Root>
        <Carrousel items={imageList} />
        <Content>
          <SiteSectionTitle marginBottom={40}>
            Serviços Personalizados
          </SiteSectionTitle>
          <List>
            {featureList.map(({ id, icon, title, description }) => (
              <ListItem key={id} alignItems="flex-start" disableGutters>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    {icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                  primary={title}
                  secondary={description}
                />
              </ListItem>
            ))}
          </List>
        </Content>
      </Root>
    </SiteContainer>
  );
}
