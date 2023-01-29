import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ITestimonial } from 'hooks/adapters/testimonials'
import RatingField from 'components/atoms/form/RatingField'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

interface Props {
  testimonial: ITestimonial
}

export default function TestimonialCard({ testimonial }: Props) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            alt={testimonial.name}
            src={testimonial.photoURL}
          />
        }
        title={testimonial.name}
        subheader={testimonial.createdAt}
      />
      <CardContent>
        <Stack direction="row" spacing={1} marginBottom={2}>
          <Chip
            label={testimonial.status}
            color={testimonial.statusColor}
            size="small"
          />
          <RatingField value={testimonial.rating} />
        </Stack>
        <Typography variant="body1">{testimonial.textEdited}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Editar</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Texto original:</Typography>
          <Typography paragraph color="text.secondary">
            {testimonial.textOriginal}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
