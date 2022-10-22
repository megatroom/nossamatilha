import { useEffect, useState } from 'react'
import { DbUser, findUsers, getUser } from './services/users'

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

  return { user, error, loading }
}
