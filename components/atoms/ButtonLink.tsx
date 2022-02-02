import Link, { LinkProps } from "@mui/material/Link";

interface Props extends LinkProps {}

export default function ButtonLink({ children, onClick }: Props) {
  return (
    <Link component="button" variant="body1" onClick={onClick}>
      {children}
    </Link>
  );
}
