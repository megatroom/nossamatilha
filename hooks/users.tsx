import { useCallback, useEffect, useState } from 'react'
import {
  DbUser,
  findUsers,
  getUser,
  updateUserByAdmin,
  UpdateUserPayload,
} from './services/users'
import { useToastMessage } from './useToast'

interface UserListProps {
  users: DbUser[]
  error?: string
}

export const useUserList = (): UserListProps => {
  const [users, setUsers] = useState<DbUser[]>([])
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    findUsers()
      .then(setUsers)
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return { users, error }
}

interface UserDetailProps {
  onSaveModalClose: () => void
  onSaveModalConfirm: () => void
  updateUser: (userPayload: UpdateUserPayload) => void
  saveModalOpen: boolean
  loading: boolean
  user?: DbUser
  error?: string
}

export const useUserDetail = (
  isEditing: boolean,
  id?: string
): UserDetailProps => {
  const [user, setUser] = useState<DbUser | undefined>()
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false)
  const [updateUserPayload, setUpdateUserPayload] = useState<
    UpdateUserPayload | undefined
  >()
  const { toastSuccess, toastError } = useToastMessage()

  useEffect(() => {
    if (isEditing) {
      if (id) {
        getUser(id)
          .then((user) => {
            setUser(user)
            setLoading(false)
          })
          .catch((err) => {
            setError(err.message)
          })
      }
    } else {
      setLoading(false)
    }
  }, [isEditing, id])

  const onSaveModalClose = useCallback(() => {
    setSaveModalOpen(false)
  }, [])

  const onSaveModalConfirm = useCallback(async () => {
    try {
      await updateUserByAdmin(
        id as string,
        updateUserPayload as UpdateUserPayload
      )
      toastSuccess('Usuário atualizado com sucesso.')
    } catch (err) {
      toastError('Erro ao atualizar usuário.', err)
    }
  }, [id, toastError, toastSuccess, updateUserPayload])

  const updateUser = useCallback((updateUserPayload: UpdateUserPayload) => {
    setUpdateUserPayload(updateUserPayload)
    setSaveModalOpen(true)
  }, [])

  return {
    onSaveModalClose,
    onSaveModalConfirm,
    updateUser,
    saveModalOpen,
    user,
    error,
    loading,
  }
}
