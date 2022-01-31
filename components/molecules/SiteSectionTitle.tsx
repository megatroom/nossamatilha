import styled from "@emotion/styled";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface RootProps {
  marginBottom?: number;
}

const Root = styled.div`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: ${({ marginBottom = 60 }: RootProps) => marginBottom}px;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 40px;
    border-radius: 3px;
    width: 60px;
    height: 3px;
    background-color: #c8cdd6;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 3px;
    width: 30px;
    height: 3px;
    background-color: #c8cdd6;
  }
`;

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

interface Props {
  children: React.ReactNode;
  id?: string;
  marginBottom?: number;
}

export default function SiteSectionTitle({
  children,
  id,
  marginBottom,
}: Props) {
  return (
    <Root id={id} marginBottom={marginBottom}>
      <Title variant="h3">{children}</Title>
    </Root>
  );
}
