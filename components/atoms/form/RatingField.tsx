import { forwardRef } from 'react'
import { styled } from 'styles/Theme'
import Rating, { RatingProps } from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import FormControl, { FormControlProps } from './FormControl'

type RefType =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined

interface Props extends Omit<RatingProps, 'onChange'>, FormControlProps {
  onChange?: (value: number) => void
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

const RatingField = (
  { id, name, label, helperText, fieldError, onChange, value, ...rest }: Props,
  ref: RefType
) => {
  return (
    <FormControl
      id={id}
      name={name}
      helperText={helperText}
      fieldError={fieldError}
      renderField={({ fieldId }) => (
        <div>
          <Typography component="legend">{label}</Typography>
          <StyledRating
            {...rest}
            id={fieldId}
            name={name}
            ref={ref}
            value={value}
            onChange={(event, newValue) => {
              onChange?.(newValue || 0)
            }}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </div>
      )}
    />
  )
}

export default forwardRef(RatingField)
