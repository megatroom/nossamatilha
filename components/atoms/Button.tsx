import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from 'styles/Theme'

interface StyledButtonProps {
  hero?: string
}

const StyledButton = styled(Button)<StyledButtonProps>(({ hero }) => {
  if (hero === '1') {
    return {
      fontSize: '17px',
      borderRadius: '12px',
      padding: '15px 32px',
      fontWeight: '700',
    }
  }

  return {}
})

interface Props extends ButtonProps {
  isHero?: boolean
  target?: string
}

export default function MyButton({
  isHero = false,
  variant = 'contained',
  ...rest
}: Props) {
  return (
    <StyledButton
      {...rest}
      variant={variant}
      hero={isHero ? '1' : '0'}
      disableElevation
    />
  )
}
