import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'

import Paper, { PaperTitle } from 'components/atoms/Paper'
import { getProviderLabel } from 'hooks/auth'
import { DBUserProvider } from 'hooks/services/users'

interface ImagePanelProps {
  currentIndex: number
  index: number
  photo?: string
}

function ImagePanel({ currentIndex, index, photo }: ImagePanelProps) {
  const theme = useTheme()
  const isDownMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div
      role="tabpanel"
      hidden={currentIndex !== index}
      id={`provider-tabpanel-${index}`}
      aria-labelledby={`provider-tabpanel-${index}`}
    >
      {currentIndex === index && (
        <Box sx={{ paddingTop: 2 }}>
          <div
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: isDownMD ? 400 : 800,
              borderRadius: 4,
              overflow: 'hidden',
            }}
          />
        </Box>
      )}
    </div>
  )
}

interface UserPhotosProps {
  providers?: DBUserProvider[]
  currentPhotoURL?: string
}

interface PhotoEntity {
  key: string
  imageUrl: string
  tabLabel: string
}

const getPhotos = ({
  providers,
  currentPhotoURL,
}: UserPhotosProps): PhotoEntity[] => {
  const result = []

  if (currentPhotoURL) {
    const currentProviderPhoto = providers?.find(
      (p) => p.photoURL === currentPhotoURL
    )

    result.push({
      key: 'current',
      imageUrl: currentPhotoURL,
      tabLabel: currentProviderPhoto
        ? `${getProviderLabel(currentProviderPhoto.code)} (Atual)`
        : 'Atual',
    })
  }

  providers?.forEach((provider) => {
    if (provider.photoURL !== currentPhotoURL) {
      result.push({
        key: provider.code,
        imageUrl: provider.photoURL,
        tabLabel: getProviderLabel(provider.code),
      })
    }
  })

  return result
}

export default function UserPhotos(props: UserPhotosProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentIndex(newValue)
  }

  const photos = getPhotos(props)

  return (
    <Paper>
      <PaperTitle text="Fotos" />
      <Tabs
        value={currentIndex}
        onChange={handleChange}
        aria-label="Provedores"
      >
        {photos.map((photo) => (
          <Tab key={`tab-${photo.key}`} label={photo.tabLabel} />
        ))}
      </Tabs>
      {photos.map((photo, index) => {
        return (
          <ImagePanel
            key={`tabpanel-${photo.key}`}
            currentIndex={currentIndex}
            index={index}
            photo={photo.imageUrl}
          />
        )
      })}
    </Paper>
  )
}
