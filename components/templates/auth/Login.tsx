import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from 'components/atoms/Button'
import Alert from 'components/atoms/Alert'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

interface LoginProps {
  onFacebookAuth: () => void
  onGoogleAuth: () => void
  onTwitterAuth: () => void
  loading: boolean
  error?: string
}

export default function Login({
  onFacebookAuth,
  onGoogleAuth,
  onTwitterAuth,
  loading,
  error,
}: LoginProps) {
  return (
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
          {error && <Alert severity="error">{error}</Alert>}
          <Box my={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              onClick={onFacebookAuth}
              loading={loading}
              icon={<FacebookIcon />}
              size="large"
              sx={{ mb: 2 }}
            >
              Entrar com o Facebook
            </Button>
            <Button
              onClick={onGoogleAuth}
              loading={loading}
              icon={<GoogleIcon />}
              size="large"
              sx={{ mb: 2 }}
            >
              Entrar com o Google
            </Button>
            <Button
              onClick={onTwitterAuth}
              loading={loading}
              icon={<TwitterIcon />}
              size="large"
              sx={{ mb: 2 }}
            >
              Entrar com o Twitter
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
