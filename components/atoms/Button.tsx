import Button from "@mui/material/Button";

interface Props {
  children: React.ReactNode;
}

export default function MyButton({ children }: Props) {
  return (
    <Button variant="contained" disableElevation>
      {children}
    </Button>
  );
}
