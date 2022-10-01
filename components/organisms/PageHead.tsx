import Head from 'next/head'

interface PageHeadProps {
  title?: string
}

export default function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <title>{`${title ? `${title} | ` : ''}Nossa Matilha`}</title>
    </Head>
  )
}
