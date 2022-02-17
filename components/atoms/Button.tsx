import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface StyledButtonProps {
  hero?: string;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  ${({ hero }) =>
    hero === "1" &&
    css`
      font-size: 17px;
      border-radius: 12px;
      padding: 15px 32px;
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
      hero={isHero ? "1" : "0"}
      disableElevation
    />
  );
}
