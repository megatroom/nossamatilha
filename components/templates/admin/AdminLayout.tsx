import AdminBody from 'components/organisms/AdminBody'
import Grid from '@mui/material/Grid'
import AdminNavbar from 'components/organisms/AdminNavbar'
import { useAuth } from 'hooks/auth'

interface Props {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
  const { logout, user } = useAuth()

  return (
    <>
      <AdminNavbar user={user} logout={logout} />
      <AdminBody>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </AdminBody>
    </>
  )
}
