import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledButton = styled(Button)`
  ${({ isHero }: Props) =>
    isHero &&
    css`
      font-size: 17px;
      border-radius: 50px;
      padding: 20px 60px;
      font-weight: 700;
    `}
`;

interface Props extends ButtonProps {
  isHero?: boolean;
}

export default function MyButton({
  isHero = false,
  variant = "contained",
  ...rest
}: Props) {
  return (
    <StyledButton
      {...rest}
      variant={variant}
      isHero={isHero}
      disableElevation
    />
  );
}
