import AvatarAndrigo from './img/andrigo.jpeg'
import AvatarLeonardo from './img/leonardo.jpeg'
import AvatarThais from './img/thais.jpeg'
import AvatarGabriela from './img/gabriela.png'
import AvatarMarilia from './img/marilia.jpeg'
import AvatarDanielle from './img/danielle.jpg'
import AvatarMarcia from './img/marcia.jpeg'
import AvatarAlexandre from './img/alexandre-soares.jpg'
import AvatarAnaPaula from './img/ana-paula-costa.jpg'

export interface TestimonialEntity {
  id: number
  image: StaticImageData
  name: string
  text: string
  startDate?: string
  endDate?: string
  origin: string
}

let idGenerator = 0
const lazyId = () => {
  idGenerator += 1
  return idGenerator
}

export const testimonials: TestimonialEntity[] = [
  {
    id: lazyId(),
    image: AvatarAndrigo,
    name: 'Andrigo',
    text: 'Muito bom o cuidado da Silvia com a Frida. Além de ter ocorrido tudo certo na hospedagem, ela também deu dicas para acalmar meu pet, com um olhar de adestrador. Recomendo demais.',
    startDate: '27/02/2021',
    endDate: '28/02/2021',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarLeonardo,
    name: 'Leonardo',
    text: 'Ela foi muito atenciosa no processo todo. Nos passou bastante confiança para deixar nosso filhote longe de casa o final de semana. Recomendo!!',
    startDate: '20/02/2021',
    endDate: '21/02/2021',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarThais,
    name: 'Thaís',
    text: 'A Silvia foi ótima com a nossa Dorothy, ela é super ansiosa e a Silvia soube lidar muito bem. Levou para passear e nos informou cada detalhe da hospedagem. E ainda a Naomi ajudou muito no cuidado e carinho com a nossa dogzinha. Adoramos e recomendo muito!',
    startDate: '27/12/2019',
    endDate: '03/01/2020',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarGabriela,
    name: 'Gabriela',
    text: 'A hospedagem foi ótima, sempre me mantendo informada, tratou ele com muito carinho e dedicação, o Buddy foi muito bem cuidado e brincou muito com sua filha. Fiquei super tranquila em deixar ele com a Silvia, pois ela tem bastante experiência com cachorros, e cuidou dele como se fosse da família dela, com certeza recomendo!! Logo o Buddy voltará para mais uma hospedagem! Nota 1000!!',
    startDate: '09/11/2019',
    endDate: '11/11/2019',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarMarilia,
    name: 'Marilia',
    text: 'A hospedagem da Lila não poderia ter sido melhor! Além da querida Silvia cuidando, tinha também a filhinha dela que com certeza contribuiu para que a Lila se sentisse muito bem. Com certeza será com a Silvia que deixarei todas as vezes que eu precisar. Um doce de pessoa.',
    startDate: '06/06/2019',
    endDate: '09/06/2019',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarDanielle,
    name: 'Danielle',
    text: 'A experiência não podia ter sido melhor! Silvia é cuidadosa, muito carinhosa e responsável. Cuidou do meu Joe com todo carinho, administrando medicação, oferecendo petiscos e cuidando para que eu sempre estivesse informada sobre sua estadia. Um brinde foi a companhia da sua filha, que é uma fofa e adorou se divertir com meu bicho rs',
    startDate: '26/05/2019',
    endDate: '29/05/2019',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarMarcia,
    name: 'Marcia',
    text: 'A Silvia é uma profissional extremamente competente e atenciosa, com a Lilo e comigo ! Lilo é uma chow-chow, já com 12 anos, e a Silvia transmitiu segurança e confiança, inclusive interagindo com a sua filha fofa!! Sua ajuda nesse verão foi indispensável. Agradeço muito, e aguarde novas visitas!',
    startDate: '22/12/2018',
    endDate: '13/01/2019',
    origin: 'doghero',
  },
  {
    id: lazyId(),
    image: AvatarAlexandre,
    name: 'Alexandre Soares',
    text: 'Foram os melhores anos para meus cães, excelente profissional, dedicação, e muito amor, com nossos filhos de 4 patas. Eu recomendo!',
    startDate: '29/10/2018',
    origin: 'facebook',
  },
  {
    id: lazyId(),
    image: AvatarAnaPaula,
    name: 'Ana Paula Costa',
    text: 'Silvia tem um carinho especial pelo cães!¡! Profissional dedicada e atenciosa. Minha Pastora já tinha passado por outros 2 adestradores que não deu certo. Felizmente tive o prazer de conhecê-la e comecei o adestramento com ela. Tudo fluiu depois disso. Só tenho a agradecer todos os ensinamentos que ela passou. Não só p meus cães, p mim tb.',
    startDate: '30/10/2018',
    origin: 'facebook',
  },
]

// export const testimonials: TestimonialEntity[] = [
//   {
//     id: 1,
//     name: "Marcia",
//     text: "A Silvia é uma profissional extremamente competente e atenciosa, com a Lilo e comigo! Lilo é uma chow-chow, já com 12 anos, e a Silvia transmitiu segurança e confiança, inclusive interagindo com a sua filha fofa de 1 aninho!! Sua ajuda nesse verão foi indispensável. Agradeço muito, e aguarde novas visitas!",
//     startDate: "22/12/2018",
//     endDate: "13/01/2019",
//   },
//   {
//     id: 2,
//     name: "Deandrade",
//     text: "Excelente trabalho. Fiquei muito tranquila durante minha viagem, pois recebi fotinhas e vídeos da minha Lhasa, a Teka. Quando retornei, ela estava super tranquila e feliz, tenho certeza que foi resultado do carinho com que foi cuidada. Agradeço e super recomendo a Silvia!!!",
//     startDate: "03/12/2019",
//   },
//   {
//     id: 3,
//     name: "Saimon",
//     text: "Silvia tem um grande amor pelos cachorros. Cuidou maravilhosamente bem da nossa Amy. Foi atenciosa com o pelo, banho, passeios e remédios. Ficamos muito felizes com as fotos e vídeos enviados durante a hospedagem e totalmente tranquilos que a Amy estava sendo muito bem cuidada. Vale citar também que a Silvia é adestradora e a Amy voltou mais comportada do que tinha ido. A filha e marido brincaram muito com a Amy e deixaram a hospedagem dela melhor ainda. Com certeza deixaremos a Amy com a Silvia sempre que possível.",
//     startDate: "01/12/2019",
//   },
//   {
//     id: 4,
//     name: "Marcosefernanda",
//     text: "Silvia sempre foi solicita quando precisei. Ela cuida muito bem dos cachorros, se mostrando atenciosa, carinhosa e dedicada aos animais. Confio muito nela e a recomendo.",
//     startDate: "16/04/2019",
//   },
//   {
//     id: 5,
//     name: "Rossana Mendonça Farias",
//     text: "Melhor adestramento que eu e meus cães poderíamos ter. Silvia nos elevou a um nível bacana de interação e obediência. Profissional maravilhosa, cuidadosa e experiente no manejo com os animais. Recomendo sempre!",
//     startDate: "29/10/2018",
//   },
//   {
//     id: 6,
//     name: "Wallace",
//     text: "Silvia é uma excelente e cuidadora e adestradora. Simba aprendeu com ela desde de pequeno. Hoje é um Golden muito educado, brincalhão e amigo. Tudo que ela ensinou até hoje ele sabe e não esquece. No começo não imaginava que seria fácil, mas, com todo o desempenho e criatividade, eu comecei a notar nas primeiras semanas. Sempre que precisei ela tomava conta do Simba, principalmente quando estava em viagem longas. Agradeço muito pelo o que ela fez por ele e faz por outros. Indico e muito essa excelente profissional.",
//     startDate: "19/11/2018",
//   },
//   {
//     id: 7,
//     name: "Danielle",
//     text: "A experiência não podia ter sido melhor! Silvia é cuidadosa, muito carinhosa e responsável. Cuidou do meu Joe com todo carinho, administrando medicação, oferecendo petiscos e cuidando para que eu sempre estivesse informada sobre sua estadia. Um brinde foi a companhia da sua filha, que é uma fofa e adorou se divertir com meu bicho rs",
//     startDate: "26/05/2019",
//     endDate: "29/05/2019",
//   },
//   {
//     id: 8,
//     name: "Marilia",
//     text: "A hospedagem da Lila não poderia ter sido melhor! Além da querida Silvia cuidando, tinha também a filhinha dela que com certeza contribuiu para que a Lila se sentisse muito bem. Com certeza será com a Silvia que deixarei todas as vezes que eu precisar. Um doce de pessoa.",
//     startDate: "06/06/2019",
//     endDate: "09/06/2019",
//   },
//   {
//     id: 9,
//     name: "Alexandre Soares",
//     text: "Foram os melhores anos para meus cães, excelente profissional, dedicação, e muito amor, com nossos filhos de 4 patas! Eu recomendo!",
//     startDate: "29/10/2018",
//   },
//   {
//     id: 10,
//     name: "Gabrielle Guerra",
//     text: "Há três anos busquei o adestramento para melhorar o comportamento das minhas meninas e o trabalho realizado foi incrível. O aprendizado não vai apenas para os cães mas, vai para os donos também. Aprendemos a ter mais segurança e confiança para lidar com nossos cães. Foram alguns meses de trabalho com resultados fantásticos. Hoje consigo manter tudo o que aprendi com a Silvia e sou muito grata por todos os ensinamentos. Eu recomendo o adestramento a todas as pessoas que eu conheço. É realmente maravilhoso.",
//     startDate: "29/10/2018",
//   },
//   {
//     id: 11,
//     name: "Rodrigo Corrêa",
//     text: "Tive a oportunidade de conhecer o trabalho realizado por excelente profissional, o qual foi perfeito para o meu cachorro. Com o adestramento ele ficou mais calmo, obediente e fora isso também se divertia. Quem tiver a possibilidade vá conhecer o serviço e levar seu melhor amigo. Recomendo!!",
//     startDate: "29/10/2018",
//   },
// ].reverse();
