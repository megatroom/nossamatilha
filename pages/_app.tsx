import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { useAnalytics } from 'hooks/analytics'
import ThemeProvider from 'styles/Theme'
import { AuthProvider } from 'hooks/auth'

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Passeios educativos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        maxSnack={5}
      >
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default MyApp
