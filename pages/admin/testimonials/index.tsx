import { ReactNode, useMemo } from 'react'
import type { NextPage } from 'next'
import PageHead from 'components/organisms/PageHead'
import { useAuth } from 'hooks/auth'
import DataTable, {
  DataModel,
  DataModelRow,
} from 'components/templates/admin/DataTable'
import AdminLayout from 'components/templates/admin/AdminLayout'
import Alert from 'components/atoms/Alert'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { useTestimonialList } from 'hooks/testimonials'
import { adaptDbTestimonialToITestimonial } from 'hooks/adapters/testimonials'
import TestimonialCard from 'components/molecules/TestimonialCard'

const TestimonialsPage: NextPage = () => {
  const { isAuthenticating } = useAuth()
  const { testimonials, error } = useTestimonialList()

  if (isAuthenticating) {
    return null
  }

  return (
    <>
      <PageHead title="Usuários" />

      <AdminLayout breadcrumbs={[{ label: 'Depoimentos' }]}>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} lg={6}>
            <TestimonialCard
              testimonial={adaptDbTestimonialToITestimonial(testimonial)}
            />
          </Grid>
        ))}
      </AdminLayout>
    </>
  )
}

export default TestimonialsPage
