import { Controller, useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'

import Form from 'components/atoms/form/Form'
import Button from 'components/atoms/Button'
import TextField from 'components/atoms/form/TextField'
import CheckboxField from 'components/atoms/form/CheckboxField'
import Paper, { PaperTitle } from 'components/atoms/Paper'
import RatingField from 'components/atoms/form/RatingField'
import { TestimonialPayload } from 'hooks/services/testimonials'
import { DbUser, DBUserRole } from 'hooks/services/users'

interface Props {
  onSubmit?: (data: TestimonialPayload) => void
  user?: DbUser
}

const getUserPhotoURL = (user: DbUser) => {
  if (user.photoURL) {
    return user.photoURL
  }

  for (const provider of user.providers) {
    if (provider.photoURL) {
      return provider.photoURL
    }
  }

  return undefined
}

export default function TestimonialCreateForm({ onSubmit, user }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimonialPayload>()
  const isGuest = user?.role === DBUserRole.guest

  const handleFormSubmit = (data: TestimonialPayload) => {
    if (!user) return

    const newData = {
      ...data,
      uid: user.id,
      textEdited: data.textOriginal,
    }

    const photoURL = getUserPhotoURL(user)
    if (photoURL) {
      newData.photoURL = photoURL
    }

    onSubmit?.(newData)
  }

  return (
    <Paper>
      <PaperTitle text="Depoimento" />
      <Typography gutterBottom>
        {isGuest && 'Você já é um cliente? '} O que acha de compartilhar sua
        experiência?
      </Typography>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={user?.displayName || ''}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} label="Nome" fieldError={errors.name} />
          )}
        />
        <Controller
          name="rating"
          control={control}
          defaultValue={0}
          rules={{ required: true, min: 1, max: 5 }}
          render={({ field }) => (
            <RatingField
              {...field}
              label="Nota"
              fieldError={
                errors.rating
                  ? 'Selecione uma nota de 1 a 5 corações.'
                  : undefined
              }
            />
          )}
        />
        <Controller
          name="textOriginal"
          defaultValue=""
          control={control}
          rules={{ required: true, minLength: 10 }}
          render={({ field }) => (
            <TextField
              {...field}
              fieldError={errors.textOriginal}
              label="Depoimento"
              placeholder="Digite seu depoimento aqui..."
              rows={5}
              minLength={10}
              multiline
            />
          )}
        />
        <div>
          <Controller
            name="authorized"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <CheckboxField
                {...field}
                label="Autorizo compartilhar este depoimento no site e redes sociais da Nossa Matilha."
              />
            )}
          />
        </div>
        <Box sx={{ textAlign: 'right', my: 1 }}>
          <Button type="submit" color="success" endIcon={<SendIcon />}>
            Enviar depoimento
          </Button>
        </Box>
      </Form>
    </Paper>
  )
}
