import { SnackbarKey, useSnackbar } from 'notistack'
import IconButton from '@mui/material/IconButton'
import IconClose from '@mui/icons-material/Close'

function SnackbarCloseButton(key: SnackbarKey) {
  const { closeSnackbar } = useSnackbar()

  return (
    <IconButton onClick={() => closeSnackbar(key)}>
      <IconClose />
    </IconButton>
  )
}

export default SnackbarCloseButton
