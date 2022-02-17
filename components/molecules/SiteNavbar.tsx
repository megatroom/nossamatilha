import styled from '@emotion/styled'
import PetsIcon from '@mui/icons-material/Pets'
import Button from '../atoms/Button'

const Root = styled.header`
  position: absolute;
  top: 16px;
  left: 0;
  right: 16px;
  display: flex;
  justify-content: flex-end;
`

export default function SiteNavbar() {
  return (
    <Root>
      <Button variant="outlined" startIcon={<PetsIcon />}>
        Área do cliente
      </Button>
    </Root>
  )
}
