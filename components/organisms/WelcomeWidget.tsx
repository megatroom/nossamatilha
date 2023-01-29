import Typography from '@mui/material/Typography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import Paper, { PaperTitle } from 'components/atoms/Paper'
import { DbUser } from 'hooks/services/users'
import { buildWhatsAppURL } from 'hooks/whatsapp'
import Button from 'components/atoms/Button'

interface Props {
  user?: DbUser
}

export default function WelcomeWidget({ user }: Props) {
  const whatsAppUrl = buildWhatsAppURL(
    `Olá. Me cadastrei no site com o nome "${user?.displayName}" e e-mail "${user?.email}". Aguardo por aprovação.`
  )

  return (
    <Paper>
      <PaperTitle text="Seja bem-vindo(a)!" />
      <Typography paragraph>
        Você ainda não está registrado como cliente. Mande uma mensagem para
        nossa equipe para que possamos te cadastrar.
      </Typography>
      <div>
        <Button startIcon={<WhatsAppIcon />} href={whatsAppUrl} target="_blank">
          Solicitar cadastro
        </Button>
      </div>
    </Paper>
  )
}
