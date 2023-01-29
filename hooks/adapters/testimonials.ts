import { DBTestimonial, DBTestimonialStatus } from 'hooks/services/testimonials'
import { adaptTimestampToString } from './helpers/date'

export type ITestimonialStatus = 'Pendente' | 'Aprovado' | 'Rejeitado'
export type ITestimonialStatusColor =
  | 'warning'
  | 'success'
  | 'error'
  | 'default'

export interface ITestimonial
  extends Pick<
    DBTestimonial,
    | 'id'
    | 'uid'
    | 'photoURL'
    | 'name'
    | 'rating'
    | 'textOriginal'
    | 'textEdited'
  > {
  status: ITestimonialStatus
  statusColor: ITestimonialStatusColor
  createdAt: string
}

const getITestimonialStatus = (
  status: DBTestimonialStatus
): ITestimonialStatus => {
  switch (status) {
    case DBTestimonialStatus.pending:
      return 'Pendente'
    case DBTestimonialStatus.approved:
      return 'Aprovado'
    case DBTestimonialStatus.rejected:
      return 'Rejeitado'
    default:
      return 'Pendente'
  }
}

const getStatusColor = (
  status: DBTestimonialStatus
): ITestimonialStatusColor => {
  switch (status) {
    case DBTestimonialStatus.pending:
      return 'warning'
    case DBTestimonialStatus.approved:
      return 'success'
    case DBTestimonialStatus.rejected:
      return 'error'
    default:
      return 'default'
  }
}

export const adaptDbTestimonialToITestimonial = (
  dbData: DBTestimonial
): ITestimonial => {
  return {
    ...dbData,
    status: getITestimonialStatus(dbData.status),
    statusColor: getStatusColor(dbData.status),
    createdAt: adaptTimestampToString(dbData.createdAt),
  }
}
