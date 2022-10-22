import { FieldError } from 'react-hook-form'

export interface ErrorOption {
  minLength?: number
  maxLength?: number
}

export const extractValidationText = (
  formError: FieldError,
  options: ErrorOption = {}
): string => {
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
