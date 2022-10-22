import FormControl, { FormControlProps } from './FormControl'
import { forwardRef } from 'react'
import { styled } from 'styles/Theme'
import { alpha } from '@mui/material/styles'
import Select, { SelectProps } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const StyledSelect = styled(Select)(({ theme, error }) => ({
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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

export interface SelectOption<Value> {
  value: Value
  label: string
}

interface SelectFieldProps<Value>
  extends Omit<SelectProps, 'label'>,
    FormControlProps {
  options?: SelectOption<Value>[]
}

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

function SelectField<Value>(
  {
    id,
    name,
    label,
    helperText,
    fieldError,
    options = [],
    ...rest
  }: SelectFieldProps<Value>,
  ref: RefType
) {
  return (
    <FormControl
      id={id}
      name={name}
      label={label}
      helperText={helperText}
      fieldError={fieldError}
      renderField={({ fieldId, hasError }) => (
        <StyledSelect
          {...rest}
          labelId={`${fieldId}-label`}
          error={hasError}
          id={fieldId}
          ref={ref}
        >
          {options.map((option) => (
            <MenuItem
              key={`${fieldId}-option-${option.value as string}`}
              value={option.value as string}
            >
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      )}
    />
  )
}

export default forwardRef(SelectField)
