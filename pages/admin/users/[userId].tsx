import { useRouter } from 'next/router'
import PageHead from 'components/organisms/PageHead'
import AdminLayout from 'components/templates/admin/AdminLayout'
import UserForm from 'components/templates/admin/forms/UserForm'
import PersonIcon from '@mui/icons-material/Person'

export default function UserDetail() {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <PageHead title="Usuário" />

      <AdminLayout
        breadcrumbs={[
          { icon: PersonIcon, label: 'Usuários', href: '/admin/users' },
          { label: 'Detalhes do usuário' },
        ]}
      >
        <UserForm id={userId as string} isEditing />
      </AdminLayout>
    </>
  )
}
