import MuiPaper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

interface PaperTitleProps {
  text?: string
}

export function PaperTitle({ text }: PaperTitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {text}
    </Typography>
  )
}

interface Props {
  children?: ReactNode
  padding?: number | string
}

export default function Paper({ padding = 2, children }: Props) {
  return <MuiPaper sx={{ padding }}>{children}</MuiPaper>
}
