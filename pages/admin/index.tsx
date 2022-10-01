import type { NextPage } from 'next'
import PageHead from 'components/organisms/PageHead'
import Home from 'components/templates/admin/Home'
import { useAuth } from 'hooks/auth'

const HomePage: NextPage = () => {
  const { loading, user } = useAuth()

  if (loading) {
    return null
  }

  return (
    <>
      <PageHead title="Admin" />

      <Home user={user} />
    </>
  )
}

export default HomePage
