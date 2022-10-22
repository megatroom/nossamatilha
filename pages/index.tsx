import type { NextPage } from 'next'
import Home from 'components/templates/site/Home'
import PageHead from 'components/organisms/PageHead'
import { useAuth } from 'hooks/auth'

const HomePage: NextPage = () => {
  const { user } = useAuth({ doNotRedirectOnLogout: true })

  return (
    <>
      <PageHead />

      <Home user={user} />
    </>
  )
}

export default HomePage
