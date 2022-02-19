import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import ChatIcon from '@mui/icons-material/Chat'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import Typography from '@mui/material/Typography'
import { buildWhatsAppURL } from 'hooks/whatsapp'
import { styled } from 'styles/Theme'
import SiteContainer from '../../atoms/SiteContainer'
import Button from '../../atoms/Button'

const Root = styled('div')({
  padding: '120px 0',
})

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '32px',
  rowGap: '60px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

const Card = styled('div')({
  position: 'relative',
  padding: '60px 20px',
  border: `5px solid rgba(173, 127, 95, 0.5)`,
  borderRadius: '5px',
  textAlign: 'center',
})

const CardIcon = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '-30px',
  left: 'calc(50% - 38px)', // - (size (60/2) + padding (16/2))
  background: theme.palette.background.paper,
  padding: '0 16px',
  height: 60,
}))

const Title = styled(Typography)({
  color: '#675444',
  fontSize: '1.8em',
  fontWeight: 700,
  marginBottom: '32px',
})

const iconProps = { color: 'rgba(153, 96, 55, 1)', fontSize: 60 }

export default function ContactCallout() {
  const whatsAppURL = buildWhatsAppURL(
    'Olá! Vi no site sobre a Nossa Matilha e gostaria de saber mais informações.'
  )

  return (
    <Root>
      <SiteContainer>
        <Grid>
          <Card>
            <CardIcon>
              <ChatIcon sx={iconProps} />
            </CardIcon>
            <Title variant="h2">
              Gostou do nosso serviço? Nos mande uma mensagem!
            </Title>
            <Button
              startIcon={<WhatsAppIcon />}
              color="secondary"
              size="large"
              href={whatsAppURL}
              target="_blank"
            >
              Chamar no WhatsApp
            </Button>
          </Card>
          <Card>
            <CardIcon>
              <CameraAltIcon sx={iconProps} />
            </CardIcon>
            <Title variant="h2">
              Ainda ficou na dúvida? Conheça nossa história no Instagram!
            </Title>
            <Button
              startIcon={<InstagramIcon />}
              color="secondary"
              size="large"
              href="https://www.instagram.com/nossamatilha.dogs/"
              target="_blank"
            >
              @nossamatilha.dogs
            </Button>
          </Card>
        </Grid>
      </SiteContainer>
    </Root>
  )
}
