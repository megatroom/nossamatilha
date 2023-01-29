import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { styled } from 'styles/Theme'

interface StyledButtonProps {
  hero?: string
  ref?: ForwardedRef<HTMLButtonElement>
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
  loading?: boolean
  target?: string
  size?: 'small' | 'medium' | 'large'
}

const getSkeletonSize = (size: ButtonProps['size']) => {
  const width = 210

  switch (size) {
    case 'small':
      return { width, height: 30.75 }
    case 'large':
      return { width, height: 42.25 }
    default:
      return { width, height: 36.5 }
  }
}

export default forwardRef(function Button(
  {
    isHero = false,
    variant = 'contained',
    loading,
    startIcon,
    endIcon,
    size,
    ...rest
  }: ButtonProps,
  ref
) {
  if (loading) {
    return (
      <Skeleton variant="rounded" {...getSkeletonSize(size)} sx={rest.sx} />
    )
  }

  return (
    <StyledButton
      {...rest}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      role={undefined}
      variant={variant}
      hero={isHero ? '1' : '0'}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      disableElevation
    />
  )
})
