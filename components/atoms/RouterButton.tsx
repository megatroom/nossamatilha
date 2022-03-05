import Link from 'next/link'
import Button, { ButtonProps } from './Button'

interface RouterButtonProps extends ButtonProps {
  href: string
}

export default function RouterButton({ href, ...rest }: RouterButtonProps) {
  return (
    <Link href={href} passHref>
      <Button {...rest} />
    </Link>
  )
}
