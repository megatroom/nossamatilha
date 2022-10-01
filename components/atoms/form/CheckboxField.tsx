import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { forwardRef } from 'react'

type RefType =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined

interface Props extends CheckboxProps {
  label?: string
}

function CheckboxField({ label, ...rest }: Props, ref: RefType) {
  return (
    <FormControlLabel
      control={<Checkbox {...rest} ref={ref} color="primary" />}
      label={label}
    />
  )
}

export default forwardRef(CheckboxField)
