import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TestimonialCreateForm from 'components/organisms/TestimonialCreateForm'
import {
  createTestimonial,
  TestimonialPayload,
} from 'hooks/services/testimonials'

import { DbUser, DBUserRole } from 'hooks/services/users'
import { useToastMessage } from 'hooks/useToast'
import WelcomeWidget from 'components/organisms/WelcomeWidget'

interface Props {
  user?: DbUser
}

export default function Home({ user }: Props) {
  const { toastSuccess, toastError } = useToastMessage()
  const isGuest = user?.role === DBUserRole.guest
  const isClient = user?.role === DBUserRole.customer
  const showTestimonialForm =
    (isGuest || isClient) && (!user || user.testimonials.length === 0)

  const onTestimonialSubmit = async (data: TestimonialPayload) => {
    try {
      await createTestimonial(data)
      toastSuccess('Depoimento enviado com sucesso!')
    } catch (err) {
      toastError('Erro ao enviar depoimento.', err)
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1" gutterBottom>
          <strong>Olá, {user?.displayName}</strong>
        </Typography>
      </Grid>
      {isGuest && (
        <Grid item xs={12}>
          <WelcomeWidget user={user} />
        </Grid>
      )}
      {showTestimonialForm && (
        <Grid item xs={12}>
          <TestimonialCreateForm onSubmit={onTestimonialSubmit} user={user} />
        </Grid>
      )}
    </>
  )
}
