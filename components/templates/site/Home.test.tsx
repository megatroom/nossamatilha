import { render, screen } from '@testing-library/react'
import Home from './Home'
import Theme from '../../../styles/Theme'

it('should render call to action', () => {
  render(
    <Theme>
      <Home />
    </Theme>
  )

  expect(screen.getByText('Saiba mais')).toBeInTheDocument()
  expect(screen.getByText('Agendar visita')).toBeInTheDocument()
})
