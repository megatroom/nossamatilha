import type { NextPage } from 'next'
import Home from 'components/templates/site/Home'
import PageHead from 'components/organisms/PageHead'

const HomePage: NextPage = () => {
  return (
    <>
      <PageHead />

      <Home />
    </>
  )
}

export default HomePage
