import Box from '@mui/material/Box'

interface Props {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

export default function Form({ onSubmit, children }: Props) {
  return (
    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
      {children}
    </Box>
  )
}
