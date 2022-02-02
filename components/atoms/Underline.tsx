import styled from "@emotion/styled";

const Root = styled.span`
  position: relative;

  &:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 205 9.37'%3E%3Cpath fill='%23f78b77' d='M202.47,9.37A1191.26,1191.26,0,0,0,1.79,7.48,1.67,1.67,0,0,1,0,5.92H0A1.76,1.76,0,0,1,1.63,4.21c67-5.71,133.83-5.43,200.8-.27A2.75,2.75,0,0,1,205,6.88h0A2.6,2.6,0,0,1,202.47,9.37Z'/%3E%3C/svg%3E");
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    left: 50%;
    bottom: -0.1em;
    width: 110%;
    height: 0.3em;
    transform: translateX(-50%);
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function Underline({ children }: Props) {
  return <Root>{children}</Root>;
}
