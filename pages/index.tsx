import type { NextPage } from 'next'
import Head from 'next/head'
import Home from 'components/templates/site/Home'
import { useAnalytics } from 'hooks/analytics'

const HomePage: NextPage = () => {
  useAnalytics()

  return (
    <>
      <Head>
        <title>Nossa Matilha</title>
      </Head>

      <Home />
    </>
  )
}

export default HomePage
