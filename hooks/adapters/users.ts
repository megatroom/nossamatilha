import { SelectOption } from 'components/atoms/form/SelectField'
import { Timestamp } from 'firebase/firestore'
import { DbUser, DBUserRole } from 'hooks/services/users'

export type IUserRole =
  | 'Bloqueado'
  | 'Visitante'
  | 'Cliente'
  | 'Funcionário'
  | 'Administrador'

export interface IUser
  extends Pick<
    DbUser,
    | 'id'
    | 'providerPlatform'
    | 'jwtToken'
    | 'displayName'
    | 'email'
    | 'photoURL'
    | 'providers'
  > {
  role: IUserRole
  emailVerified: 'Sim' | 'Não'
  createdAt: string
  updatedAt: string
  lastLoginAt: string
}

const getIUserRole = (role: DBUserRole): IUserRole => {
  switch (role) {
    case DBUserRole.blocked:
      return 'Bloqueado'
    case DBUserRole.guest:
      return 'Visitante'
    case DBUserRole.customer:
      return 'Cliente'
    case DBUserRole.employee:
      return 'Funcionário'
    case DBUserRole.admin:
      return 'Administrador'
    default:
      return 'Visitante'
  }
}

export const getRoleOptions = (): SelectOption<DBUserRole>[] => {
  return Object.values(DBUserRole).map<SelectOption<DBUserRole>>((role) => ({
    label: getIUserRole(role),
    value: role,
  }))
}

const getIUserDate = (date: Timestamp): string => {
  try {
    return `${date.toDate().toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })} ${date.toDate().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })}`
  } catch (err) {
    console.error('getIUserDate error', date, err)
    return ''
  }
}

export const adaptDbUserToIUser = (dbUser: DbUser): IUser => {
  return {
    ...dbUser,
    role: getIUserRole(dbUser.role),
    emailVerified: dbUser.emailVerified ? 'Sim' : 'Não',
    createdAt: getIUserDate(dbUser.createdAt),
    updatedAt: getIUserDate(dbUser.updatedAt),
    lastLoginAt: getIUserDate(dbUser.lastLoginAt),
  }
}
