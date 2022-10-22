import type { NextPage } from 'next'
import PageHead from 'components/organisms/PageHead'
import Home from 'components/templates/admin/Home'
import { useAuth } from 'hooks/auth'
import AdminLayout from 'components/templates/admin/AdminLayout'

const HomePage: NextPage = () => {
  const { isAuthenticating, user } = useAuth()

  if (isAuthenticating) {
    return null
  }

  return (
    <>
      <PageHead title="Admin" />

      <AdminLayout>
        <Home user={user} />
      </AdminLayout>
    </>
  )
}

export default HomePage
