import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { ADMIN_ROUTER_PATH, initGoogleAuth, isAuthenticate } from 'hooks/auth'
import Login from 'components/templates/auth/Login'
import PageHead from 'components/organisms/PageHead'

export default function LoginPage() {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    isAuthenticate().then((isAuth) => {
      if (isAuth) {
        router.push(ADMIN_ROUTER_PATH)
      } else {
        setLoading(false)
      }
    })
  }, [router])

  const handleGoogleLogin = () => {
    initGoogleAuth()
      .then(() => {
        router.push(ADMIN_ROUTER_PATH)
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return (
    <>
      <PageHead title="Login" />

      <Login error={error} loading={loading} onGoogleAuth={handleGoogleLogin} />
    </>
  )
}
