import { useState } from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { styled } from 'styles/Theme'
import SiteSectionTitle from '../../molecules/SiteSectionTitle'
import SiteContainer from '../../atoms/SiteContainer'
import LinkButton from '../../atoms/LinkButton'
import Button from '../../atoms/Button'
import Block1 from './img/adestramento-02.jpeg'
import Block2 from './img/pet-sitter-02.jpeg'
import Block3 from './img/passeio-01.jpg'
import { buildWhatsAppURL } from 'hooks/whatsapp'

interface Item {
  id: number
  image: StaticImageData
  imagePosition: string
  title: string
  summary: string
  description: string[]
}

const items: Item[] = [
  {
    id: 1,
    image: Block1,
    imagePosition: 'top center',
    title: 'Adestramento Positivo',
    summary:
      'Tornar seu melhor amigo capaz de obedecer comandos sem usar de punições ou recompensas.',
    description: [
      'Esse formato de adestramento veio para banir o adestramento convencional, onde muitos “adestradores” usam métodos de punição para ensinar, gerando diversos traumas nos cães. Dos adestradores positivos existem os que trabalham com petiscos e até clicker que são formas de tornar interessante a abordagem. Nosso método é baseado em rotina! Os cães ao longo dos anos se tornaram muito dependentes do seu humano, foi se adaptando a rotina do humano, foi educado para nos respeitar e assim dizemos que: “O cão é o melhor amigo do homem!”.',
      'Por que não tornar essa fala mais coerente, ensinando, tornando seu melhor amigo capaz de lhe obedecer sem usar de métodos de punição como enforcadores, palmadas e broncas? E por que usar de métodos de recompensa a cada comando tornando ele um cão interesseiro?',
      'Usamos de rotina para ensinar nossa matilha. A maior recompensa dos cães que adestramos é o carinho que recebem de seus tutores ao responderem um comando, ensinamos aos tutores uma rotina que trabalha corpo e mente dos cães, trazendo respeito e equilíbrio para vida de ambos."',
    ],
  },
  {
    id: 2,
    image: Block2,
    imagePosition: 'center center',
    title: 'Pet Sitter',
    summary:
      'Cuidamos do seu melhor amigo em sua casa. Alimentação, limpeza, passeio e muito carinho!',
    description: [
      'Cães de grande porte nem sempre se adaptam em local diferente, se não forem sociais, podem gerar agressividade em hospedagens por não estarem acostumados a contato com outros animais. Podem se machucar ao tentar fugir. Podem comer alimento de outro cão, plantas ou outra coisa que não esteja em sua rotina (se não houver supervisão adequada), podem se sentir acoados e com isso morder até mesmo o cuidador. Até os cães de menor porte podem agir de tal forma, e pior, podem se sentir abandonados ou voltarem com algum trauma por sair de seu lar e de sua rotina.',
      'Pensando nisso trabalhamos cuidando do seu cão em sua casa. Fazemos visitas agendadas para suprir a ausência do seu humano, fazemos a limpeza do local, brincando, levando para passear, dando alimentação no horário de costume e muito carinho.',
    ],
  },
  {
    id: 3,
    image: Block3,
    imagePosition: 'center center',
    title: 'Passeio Educativo',
    summary:
      'Educamos seu melhor amigo para que ele não puxe a guia nem lata para outros cães durante o passeio.',
    description: [
      'Não, não fazemos um simples passeio!',
      'Quando falamos de passeio educativo estamos nos referindo a passear de forma educada e organizada, nada de sair puxando a guia e latindo para tudo que vê de diferente nas ruas. Ensinamos os cães a andarem ao lado do condutor sem o estresse de ficar puxando guia, evitando animais em portões ou na rua.',
      'Fazemos uma rotina de passeios socializando o cão, ensinando que deve respeitar seu tutor, tornando o passeio uma atividade prazerosa para ambos.',
    ],
  },
]

const Root = styled('div')(({ theme }) => ({
  margin: '60px 0 120px 0',

  [theme.breakpoints.down('sm')]: {
    margin: '80px 0 120px 0',
  },
}))

const Row = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  marginBottom: '30px',
  rowGap: '30px',
  columnGap: '30px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}))

const Media = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 380,
  borderRadius: '0.4rem',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    height: 300,
  },
}))

interface TitleProps {
  component?: string
}

const Title = styled(Typography)<TitleProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}))

const Summary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 700,
  marginBottom: 16,
}))

interface ExpandContainerProps {
  expanded?: string
}

const ExpandContainer = styled('div')<ExpandContainerProps>(({ expanded }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: expanded === '1' ? 'auto' : 120,

  '&:after': expanded !== '1' && {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
  },
}))

const Description = styled(Typography)({
  fontWeight: 500,
  marginBottom: 8,
})

const ShowMoreContainer = styled('div')({
  marginTop: 16,
})

const CallToAction = styled('div')({
  margin: '16px 0',
})

function FeatureItem({
  image,
  imagePosition,
  title,
  summary,
  description,
}: Item) {
  const [expanded, setExpanded] = useState(false)

  const handleShowMore = () => {
    setExpanded((prevState) => !prevState)
  }

  const buildCTA = (topic: string) =>
    buildWhatsAppURL(
      `Olá! Vi no site sobre ${topic} e gostaria de saber mais a respeito.`
    )

  return (
    <Row>
      <Media>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition={imagePosition}
          placeholder="blur"
          quality={100}
        />
      </Media>
      <div>
        <Title variant="h4" component="h2" gutterBottom>
          {title}
        </Title>
        <Summary variant="subtitle1">{summary}</Summary>
        <ExpandContainer expanded={expanded ? '1' : '0'}>
          {description.map((text, index) => (
            <Description key={`feat-desc-${index}`} variant="body1">
              {text}
            </Description>
          ))}
          <CallToAction>
            <Button target="_blank" href={buildCTA(title)}>
              Agendar serviço
            </Button>
          </CallToAction>
        </ExpandContainer>
        {!expanded && (
          <ShowMoreContainer>
            <LinkButton onClick={handleShowMore}>Continuar lendo</LinkButton>
          </ShowMoreContainer>
        )}
      </div>
    </Row>
  )
}

export default function Features() {
  return (
    <Root>
      <SiteContainer>
        <SiteSectionTitle id="features">
          Serviços Personalizados
        </SiteSectionTitle>
        {items.map((item) => (
          <FeatureItem key={item.id} {...item} />
        ))}
      </SiteContainer>
    </Root>
  )
}
