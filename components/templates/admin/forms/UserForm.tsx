import { Controller, useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

import Form from 'components/atoms/form/Form'
import Button from 'components/atoms/Button'
import TextField from 'components/atoms/form/TextField'
import CheckboxField from 'components/atoms/form/CheckboxField'
import { useUserDetail } from 'hooks/users'
import ProviderForm from 'components/organisms/ProviderForm'
import Paper, { PaperTitle } from 'components/atoms/Paper'
import { useMemo } from 'react'
import { adaptDbUserToIUser, getRoleOptions } from 'hooks/adapters/users'
import SelectField, { SelectOption } from 'components/atoms/form/SelectField'
import { DBUserRole } from 'hooks/services/users'

interface Props {
  /**
   * The user ID is lazy loaded from the URL,
   * so we need a strong flag to indicate it's in editing mode.
   */
  isEditing: boolean
  /**
   * User ID
   */
  id?: string
}

export default function UserForm({ isEditing, id }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { loading, user } = useUserDetail(isEditing, id)

  const iUser = useMemo(() => {
    if (!user) {
      return
    }
    return adaptDbUserToIUser(user)
  }, [user])

  const roleOptions = useMemo<SelectOption<DBUserRole>[]>(() => {
    return getRoleOptions()
  }, [])

  const onSubmit = (data) => console.log(data)

  if (loading) {
    return null
  }

  return (
    <>
      <Grid item xs={12}>
        <Paper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={2}>
              <div>
                <Avatar
                  alt={user?.displayName}
                  src={user?.photoURL}
                  sx={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                label="Nome de Exibição"
                value={user?.displayName}
                readOnly
              />
              <TextField label="E-mail" value={user?.email} readOnly />
              <div>
                <CheckboxField
                  label="E-mail verificado."
                  checked={user?.emailVerified}
                  readOnly
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <PaperTitle text="Controle de acesso" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Conta criada em"
                  value={iUser?.createdAt}
                  readOnly
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Última atualização"
                  value={iUser?.updatedAt}
                  readOnly
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Último acesso"
                  value={iUser?.lastLoginAt}
                  readOnly
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="role"
                  control={control}
                  defaultValue={user?.role || ''}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      label="Papel"
                      fieldError={errors.role}
                      options={roleOptions}
                    />
                  )}
                />
                <Box sx={{ textAlign: 'right', marginY: 2 }}>
                  <Button type="submit">Salvar</Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Grid>

      <ProviderForm providers={user?.providers || []} />
    </>
  )
}
