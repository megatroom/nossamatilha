import Image from 'next/image'
import { styled } from 'styles/Theme'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SiteContainer from '../../atoms/SiteContainer'
import LogoImg from './img/NossaMatilha400.png'
import InstagramIco from './IconInstagram'
import FacebookIco from './IconFacebook'

const Root = styled('footer')({
  /* borderTop: '1px solid #dddddd6e', */
  padding: '1rem 0',
})

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const GridItem = styled('div')(({ theme }) => ({
  padding: 16,

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}))

const Grid = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}))

export default function SiteFooter() {
  return (
    <Root>
      <SiteContainer>
        <Grid>
          <GridItem>
            <Image
              alt="Nossa Matilha logo"
              src={LogoImg}
              layout="intrinsic"
              width={280}
              height={118}
            />
          </GridItem>
          <GridItem>
            <Title variant="h6" gutterBottom>
              Redes Sociais
            </Title>
            <div>
              <IconButton
                target="_blank"
                href="https://www.instagram.com/nossamatilha.dogs"
              >
                <InstagramIco width="42px" />
              </IconButton>{' '}
              <IconButton
                target="_blank"
                href="https://www.facebook.com/nossamatilha.dogs"
              >
                <FacebookIco width="42px" />
              </IconButton>
            </div>
          </GridItem>
        </Grid>
      </SiteContainer>
    </Root>
  )
}
