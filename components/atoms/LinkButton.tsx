import Link, { LinkProps } from '@mui/material/Link'

interface Props extends LinkProps {}

/**
 * Link with button behavior
 */
export default function LinkButton({ children, onClick }: Props) {
  return (
    <Link component="button" variant="body1" onClick={onClick}>
      {children}
    </Link>
  )
}
