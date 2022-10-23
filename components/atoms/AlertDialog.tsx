import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface Props {
  onClose: () => void
  onConfirm: () => void
  open: boolean
  title: string
  message: string
  confirmColor?: 'success' | 'error'
}

export default function AlertDialog({
  onClose,
  onConfirm,
  open,
  title,
  message,
  confirmColor = 'success',
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          onClick={() => {
            onClose()
            onConfirm()
          }}
          color={confirmColor}
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
