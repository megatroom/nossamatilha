import type { AppProps } from 'next/app'
import Head from 'next/head'
import Theme from 'styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Passeios educativos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
