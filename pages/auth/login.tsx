import Head from 'next/head'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Form from 'components/atoms/form/Form'
import TextField from 'components/atoms/form/TextField'
import Button from 'components/atoms/Button'
import { LoginPayload, postLogin } from 'services/auth'

export default function Login() {
  const { control, handleSubmit } = useForm<LoginPayload>()

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    postLogin(data).then((res) => {
      console.log({ res })
    })
  }

  return (
    <>
      <Head>
        <title>Nossa Matilha - Login</title>
      </Head>

      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?dogs)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    autoComplete="email"
                    autoFocus
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                  />
                )}
              />
              <Button type="submit" sx={{ mt: 3, mb: 2 }} fullWidth>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Não possui conta?
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
