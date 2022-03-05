import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  body: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body, method } = req

  switch (method) {
    case 'POST':
      res.status(200).json({ body })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
