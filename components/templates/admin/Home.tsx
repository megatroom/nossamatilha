import { Controller, useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'

import Form from 'components/atoms/form/Form'
import Button from 'components/atoms/Button'
import TextField from 'components/atoms/form/TextField'
import CheckboxField from 'components/atoms/form/CheckboxField'
import { DbUser } from 'hooks/services/users'

interface Props {
  user?: DbUser
}

export default function Home({ user }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Depoimento
        </Typography>
        <Typography gutterBottom>
          Você é um cliente? O que acha de compartilhar sua experiência?
        </Typography>
        <Form>
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
            name="testimonial"
            defaultValue=""
            control={control}
            rules={{ required: true, minLength: 10 }}
            render={({ field }) => (
              <TextField
                {...field}
                fieldError={errors.testimonial}
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
              name="authorization"
              control={control}
              render={({ field }) => (
                <CheckboxField
                  {...field}
                  label="Autorizo compartilhar este depoimento no site e redes sociais da Nossa Matilha."
                  defaultChecked
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
    </Grid>
  )
}
