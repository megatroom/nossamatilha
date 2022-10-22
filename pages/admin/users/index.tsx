import type { NextPage } from 'next'
import PageHead from 'components/organisms/PageHead'
import { useAuth } from 'hooks/auth'
import DataTable, {
  DataModel,
  DataModelRow,
} from 'components/templates/admin/DataTable'
import AdminLayout from 'components/templates/admin/AdminLayout'
import { useUserList } from 'hooks/users'
import Alert from 'components/atoms/Alert'
import { ReactNode, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { adaptDbUserToIUser } from 'hooks/adapters/users'
import { DBUserProvider, DBUserProviderCode } from 'hooks/services/users'
import Avatar from '@mui/material/Avatar'

const getProviderIcons = (providers: DBUserProvider[]): ReactNode => {
  return (
    <>
      {providers.map((provider) => {
        switch (provider.code) {
          case DBUserProviderCode.google:
            return <GoogleIcon key={provider.code} />
          case DBUserProviderCode.facebook:
            return <FacebookIcon key={provider.code} />
          case DBUserProviderCode.twitter:
            return <TwitterIcon key={provider.code} />
          default:
            return <HelpOutlineIcon key={provider.code} />
        }
      })}
    </>
  )
}

const UsersPage: NextPage = () => {
  const { isAuthenticating } = useAuth()
  const { users, error } = useUserList()

  const rows = useMemo<DataModelRow[]>(
    () =>
      users.map<DataModelRow>((model) => {
        const user = adaptDbUserToIUser(model)
        const detailPath = `/admin/users/${user.id}`
        return {
          cells: [
            {
              value: <Avatar alt={user.displayName} src={user.photoURL} />,
              linkTo: detailPath,
            },
            { value: user.displayName, linkTo: detailPath },
            { value: user.email },
            { value: user.emailVerified },
            {
              value: getProviderIcons(user.providers),
            },
            { value: user.createdAt },
            { value: user.role },
          ],
        }
      }),
    [users]
  )

  if (isAuthenticating) {
    return null
  }

  const model: DataModel = {
    columns: [
      { name: 'photoURL', label: 'Photo' },
      { name: 'displayName', label: 'Nome de Exibição' },
      { name: 'email', label: 'E-mail' },
      { name: 'emailVerified', label: 'Verificado?' },
      { name: 'providerId', label: 'Provedor' },
      { name: 'createdAt', label: 'Criado em' },
      { name: 'role', label: 'Papel' },
    ],
    rows,
  }

  return (
    <>
      <PageHead title="Usuários" />

      <AdminLayout>
        <Grid item xs={12}>
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <DataTable id="tblUsers" model={model} />
      </AdminLayout>
    </>
  )
}

export default UsersPage
