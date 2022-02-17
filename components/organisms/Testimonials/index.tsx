import Image from 'next/image'
import { styled } from '../../../styles/Theme'
import SiteContainer from '../../atoms/SiteContainer'
import SiteSectionTitle from '../../molecules/SiteSectionTitle'
import BgImage from './img/f74665c2-ae13-4115-8a49-6ed4118a169d.jpeg'
import Carousel from './Carousel'

const Root = styled('div')({
  position: 'relative',
})

const BgWrap = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
})

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  backgroundColor: 'rgba(0, 0, 0, 0.7)',
})

const Content = styled('div')(({ theme }) => ({
  padding: '120px 0',

  [theme.breakpoints.down('sm')]: {
    padding: '80px 0',
  },
}))

export default function Testimonials() {
  return (
    <Root>
      <BgWrap>
        <Image
          alt="Silvia com dois cachorros"
          src={BgImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          quality={100}
        />
        <Overlay />
      </BgWrap>
      <SiteContainer>
        <Content>
          <SiteSectionTitle reverse>Depoimentos</SiteSectionTitle>
          <Carousel />
        </Content>
      </SiteContainer>
    </Root>
  )
}
