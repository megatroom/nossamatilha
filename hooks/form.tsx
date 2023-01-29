import { FormControlError } from 'components/atoms/form/FormControl'

export interface ErrorOption {
  minLength?: number
  maxLength?: number
}

export const extractValidationText = (
  formError: FormControlError,
  options: ErrorOption = {}
): string => {
  if (typeof formError === 'string') {
    return formError
  }

  switch (formError.type) {
    case 'required':
      return 'Campo obrigatório'
    case 'minLength':
      return `Mínimo de ${options.minLength} caracteres`
    case 'maxLength':
      return `Máximo de ${options.maxLength} caracteres`
    default:
      return 'Campo inválido'
  }
}
