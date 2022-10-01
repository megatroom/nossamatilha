import { ReactNode } from 'react'
import MuiAlert from '@mui/material/Alert'

interface Props {
  severity?: 'success' | 'error'
  children: ReactNode
}

export default function Alert({ severity = 'error', children }: Props) {
  return <MuiAlert severity={severity}>{children}</MuiAlert>
}
