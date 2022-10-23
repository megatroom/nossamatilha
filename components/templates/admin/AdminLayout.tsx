import AdminBody from 'components/organisms/AdminBody'
import Grid from '@mui/material/Grid'
import AdminNavbar from 'components/organisms/AdminNavbar'
import { useAuth } from 'hooks/auth'
import Breadcrumbs, { Breadcrumb } from 'components/atoms/Breadcrumbs'

interface Props {
  breadcrumbs?: Breadcrumb[]
  children: React.ReactNode
}

export default function AdminLayout({ breadcrumbs = [], children }: Props) {
  const { logout, user } = useAuth()

  return (
    <>
      <AdminNavbar user={user} logout={logout} />
      <AdminBody>
        <Breadcrumbs items={breadcrumbs} />
        <Grid container spacing={3} paddingBottom={7}>
          {children}
        </Grid>
      </AdminBody>
    </>
  )
}
