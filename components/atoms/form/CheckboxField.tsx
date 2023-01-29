import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { forwardRef } from 'react'

type RefType =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined

interface Props
  extends Omit<CheckboxProps, 'onChange' | 'value' | 'defaultValue'> {
  label?: string
  onChange?: (value: boolean) => void
  value?: boolean
  defaultValue?: boolean
}

function CheckboxField(
  { onChange, value, defaultValue, label, ...rest }: Props,
  ref: RefType
) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...rest}
          onChange={(event, checked) => {
            onChange?.(checked)
          }}
          defaultChecked={defaultValue}
          checked={!!value}
          ref={ref}
          color="primary"
        />
      }
      label={label}
    />
  )
}

export default forwardRef(CheckboxField)
