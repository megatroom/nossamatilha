import { Timestamp } from 'firebase/firestore'

export const adaptTimestampToString = (date: Timestamp): string => {
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
    return ''
  }
}
