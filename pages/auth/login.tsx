import Login from 'components/templates/auth/Login'
import PageHead from 'components/organisms/PageHead'
import { useLogin } from 'hooks/auth'

export default function LoginPage() {
  const {
    loginWithFacebook,
    loginWithGoogle,
    loginWithTwitter,
    error,
    loading,
  } = useLogin()

  return (
    <>
      <PageHead title="Login" />

      <Login
        onFacebookAuth={loginWithFacebook}
        onGoogleAuth={loginWithGoogle}
        onTwitterAuth={loginWithTwitter}
        loading={loading}
        error={error}
      />
    </>
  )
}
