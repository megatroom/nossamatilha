import PageHead from 'components/organisms/PageHead'
import AdminLayout from 'components/templates/admin/AdminLayout'
import UserForm from 'components/templates/admin/forms/UserForm'
import { useRouter } from 'next/router'

export default function UserDetail() {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <PageHead title="Usuário" />

      <AdminLayout>
        <UserForm id={userId as string} isEditing />
      </AdminLayout>
    </>
  )
}
