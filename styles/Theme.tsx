import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createStyled } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline'

import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
// import "@fontsource/raleway/800.css";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: 'rgba(173, 127, 95, 1)',
      main: 'rgba(153, 96, 55, 1)',
      dark: 'rgba(107, 67, 38, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(166, 192, 105, 1)',
      main: 'rgba(144, 177, 68, 1)',
      dark: 'rgba(100, 123, 47, 1)',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
})

interface Props {
  children: React.ReactNode
}

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export const styled = createStyled({ defaultTheme })
