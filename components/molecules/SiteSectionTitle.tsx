import { styled } from 'styles/Theme'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface RootProps {
  marginbottom?: number
}

const Root = styled('div')<RootProps>(({ marginbottom = 60 }) => ({
  position: 'relative',
  paddingBottom: '20px',
  marginBottom: marginbottom,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '40px',
    borderRadius: '3px',
    width: '60px',
    height: '3px',
    backgroundColor: '#c8cdd6',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '0',
    borderRadius: '3px',
    width: '30px',
    height: '3px',
    backgroundColor: '#c8cdd6',
  },
}))

interface TitleProps extends TypographyProps {
  reverse: string
}

const Title = styled(Typography)<TitleProps>(({ theme, reverse }) => ({
  color: reverse === '1' ? '#fff' : theme.palette.primary.main,
}))

interface Props {
  children: React.ReactNode
  id?: string
  marginBottom?: number
  reverse?: boolean
}

export default function SiteSectionTitle({
  children,
  id,
  marginBottom,
  reverse,
}: Props) {
  return (
    <Root id={id} marginbottom={marginBottom}>
      <Title variant="h3" reverse={reverse ? '1' : '0'}>
        {children}
      </Title>
    </Root>
  )
}
