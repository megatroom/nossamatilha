import Image from 'next/image'
import { styled } from 'styles/Theme'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import PetsIcon from '@mui/icons-material/Pets'
import RouterButton from '../../atoms/RouterButton'
import SiteContainer from '../../atoms/SiteContainer'
import LogoImg from './img/nossa-matilha-navbar-logo.png'
import { DbUser } from 'hooks/services/users'

const Root = styled('header')({
  padding: '8px 0',
})

const Content = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

interface SiteNavbarProps {
  user?: DbUser
}

export default function SiteNavbar({ user }: SiteNavbarProps) {
  const theme = useTheme()
  const isDownSM = useMediaQuery(theme.breakpoints.down('sm'))

  const adminPath = user ? '/admin' : '/auth/login'

  return (
    <Root>
      <SiteContainer>
        <Content>
          <nav>
            <Image
              src={LogoImg}
              alt="Nossa Matilha Logo"
              width={163}
              height={60}
            />
          </nav>
          <nav>
            <RouterButton
              variant="outlined"
              startIcon={<PetsIcon />}
              href={adminPath}
            >
              {isDownSM ? 'Cliente' : 'Área do cliente'}
            </RouterButton>
          </nav>
        </Content>
      </SiteContainer>
    </Root>
  )
}
