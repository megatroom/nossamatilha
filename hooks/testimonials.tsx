import { useEffect, useState } from 'react'
import { DBTestimonial, findTestimonials } from './services/testimonials'

interface TestimonialListProps {
  testimonials: DBTestimonial[]
  error?: string
}

export const useTestimonialList = (): TestimonialListProps => {
  const [testimonials, setTestimonials] = useState<DBTestimonial[]>([])
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    findTestimonials()
      .then(setTestimonials)
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return { testimonials, error }
}
