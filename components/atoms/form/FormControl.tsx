import { ReactNode } from 'react'
import { styled } from 'styles/Theme'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import MuiFormControl from '@mui/material/FormControl'

import { ErrorOption, extractValidationText } from 'hooks/form'

const StyledLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.4rem',
}))

export type FormControlError =
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>

interface RenderFieldProps {
  fieldId: string | undefined
  hasError: boolean
}

export interface FormControlProps {
  id?: string
  name?: string
  label?: string
  helperText?: string
  fieldError?: FormControlError
  errorOption?: ErrorOption
  renderField?: (props: RenderFieldProps) => ReactNode
}

export default function FormControl({
  id,
  name,
  label,
  helperText,
  fieldError,
  errorOption,
  renderField,
}: FormControlProps) {
  const fieldId = id || name
  const hasError = !!fieldError

  return (
    <MuiFormControl
      variant="standard"
      margin="normal"
      error={hasError}
      fullWidth
    >
      {label && (
        <StyledLabel shrink htmlFor={fieldId}>
          {label}
        </StyledLabel>
      )}
      {renderField?.({ fieldId, hasError })}
      {fieldError && (
        <FormHelperText error>
          {extractValidationText(fieldError as FieldError, errorOption)}
        </FormHelperText>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </MuiFormControl>
  )
}
