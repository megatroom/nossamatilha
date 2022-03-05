import React from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { styled } from 'styles/Theme'

interface StyledButtonProps {
  hero?: string
  ref?: React.ForwardedRef<HTMLButtonElement>
}

const StyledButton = styled(MuiButton)<StyledButtonProps>(({ hero }) => {
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

export interface ButtonProps extends MuiButtonProps {
  isHero?: boolean
  target?: string
}

export default React.forwardRef(function Button(
  { isHero = false, variant = 'contained', ...rest }: ButtonProps,
  ref
) {
  return (
    <StyledButton
      {...rest}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      role={undefined}
      variant={variant}
      hero={isHero ? '1' : '0'}
      disableElevation
    />
  )
})
