import { JSXElementConstructor } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import { SvgIconProps } from '@mui/material'

export type Breadcrumb = {
  label: string
  href?: string
  icon?: JSXElementConstructor<SvgIconProps>
}

interface BreadcrumbsProps {
  items: Breadcrumb[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box marginBottom={4}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link href="/admin" passHref>
          <MuiLink
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Início
          </MuiLink>
        </Link>
        {items.map(({ icon: IconComponent, label, href }, index) => {
          const isLast = index === items.length - 1

          if (isLast) {
            return (
              <Typography
                key={`breadcrumb-${index}`}
                sx={{ fontWeight: 'bold' }}
                color="text.primary"
              >
                {label}
              </Typography>
            )
          }

          return (
            <Link href={href as string} key={`breadcrumb-${index}`} passHref>
              <MuiLink
                sx={{ display: 'flex', alignItems: 'center' }}
                underline="hover"
                color="inherit"
              >
                {IconComponent && (
                  <IconComponent sx={{ mr: 0.5 }} fontSize="inherit" />
                )}
                {label}
              </MuiLink>
            </Link>
          )
        })}
      </MuiBreadcrumbs>
    </Box>
  )
}
