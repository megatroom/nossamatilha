import React from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

const TextField = (props: TextFieldProps, ref: RefType) => {
  return <MuiTextField margin="normal" ref={ref} fullWidth {...props} />
}

export default React.forwardRef(TextField)
