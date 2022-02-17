import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/templates/site/Home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossa Matilha</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Passeios educativos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  )
}

export default HomePage
