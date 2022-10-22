import { useState } from 'react'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import TextField from 'components/atoms/form/TextField'
import { DBUserProvider } from 'hooks/services/users'
import Paper, { PaperTitle } from 'components/atoms/Paper'
import { getProviderLabel } from 'hooks/auth'

interface TabPanelProps {
  children?: React.ReactNode
  currentIndex: number
  index: number
}

function TabPanel({ children, currentIndex, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={currentIndex !== index}
      id={`provider-tabpanel-${index}`}
      aria-labelledby={`provider-tabpanel-${index}`}
      {...other}
    >
      {currentIndex === index && (
        <Box sx={{ paddingY: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

interface Props {
  providers: DBUserProvider[]
}

export default function ProviderForm({ providers }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentIndex(newValue)
  }

  return (
    <Grid item xs={12}>
      <Paper>
        <PaperTitle text="Provedores" />
        <Tabs
          value={currentIndex}
          onChange={handleChange}
          aria-label="Provedores"
        >
          {providers.map((provider, index) => (
            <Tab
              key={`tab-${provider.code}-${index}`}
              label={getProviderLabel(provider.code)}
            />
          ))}
        </Tabs>
        {providers.map((provider, index) => (
          <TabPanel
            key={`tabpanel-${provider.code}-${index}`}
            currentIndex={currentIndex}
            index={index}
          >
            <TextField
              label="Nome de Exibição"
              value={provider.displayName}
              readOnly
            />
            <TextField label="E-mail" value={provider.email} readOnly />
            <TextField label="Telefone" value={provider.phoneNumber} readOnly />
            <TextField label="Foto" value={provider.photoURL} readOnly />
          </TabPanel>
        ))}
      </Paper>
    </Grid>
  )
}
