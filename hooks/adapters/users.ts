import { SelectOption } from 'components/atoms/form/SelectField'
import { DbUser, DBUserRole } from 'hooks/services/users'
import { adaptTimestampToString } from './helpers/date'

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

export const adaptDbUserToIUser = (dbUser: DbUser): IUser => {
  return {
    ...dbUser,
    role: getIUserRole(dbUser.role),
    emailVerified: dbUser.emailVerified ? 'Sim' : 'Não',
    createdAt: adaptTimestampToString(dbUser.createdAt),
    updatedAt: adaptTimestampToString(dbUser.updatedAt),
    lastLoginAt: adaptTimestampToString(dbUser.lastLoginAt),
  }
}
