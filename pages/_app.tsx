import type { AppProps } from 'next/app'
import Theme from '../styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
