import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { alpha } from '@mui/material/styles'
import { styled } from 'styles/Theme'
import { forwardRef } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { extractValidationText } from 'hooks/form'

const StyledLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.4rem',
}))

const StyledInput = styled(InputBase)(({ theme, error }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: `1px solid ${error ? theme.palette.error.light : '#ced4da'}`,
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: "'Raleway', sans-serif",
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

interface Props extends InputBaseProps {
  id?: string
  name?: string
  label?: string
  helperText?: string
  fieldError?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  minLength?: number
}

const TextField = (
  { id, name, label, helperText, fieldError, minLength, ...rest }: Props,
  ref: RefType
) => {
  const inputId = id || name

  return (
    <FormControl
      variant="standard"
      margin="normal"
      error={!!fieldError}
      fullWidth
    >
      {label && (
        <StyledLabel shrink htmlFor={inputId}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        {...rest}
        ref={ref}
        id={inputId}
        name={name}
        error={!!fieldError}
      />
      {fieldError && (
        <FormHelperText error>
          {extractValidationText(fieldError as FieldError, { minLength })}
        </FormHelperText>
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default forwardRef(TextField)
