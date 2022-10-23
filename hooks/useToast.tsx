import { useCallback } from 'react'
import { useSnackbar } from 'notistack'
import SnackbarCloseButton from 'components/atoms/SnackbarCloseButton'

interface UseToastMessageProps {
  toastSuccess: (message: string) => void
  toastError: (message: string, error?: unknown) => void
}

export const useToastMessage = (): UseToastMessageProps => {
  const { enqueueSnackbar } = useSnackbar()

  const toastSuccess = useCallback(
    (message: string) => {
      enqueueSnackbar(message, {
        variant: 'success',
      })
    },
    [enqueueSnackbar]
  )

  const toastError = useCallback(
    (message: string, error?: unknown) => {
      if (error) {
        console.error(error)
      }
      enqueueSnackbar(message, {
        action: SnackbarCloseButton,
        variant: 'error',
        persist: true,
      })
    },
    [enqueueSnackbar]
  )

  return {
    toastSuccess,
    toastError,
  }
}
