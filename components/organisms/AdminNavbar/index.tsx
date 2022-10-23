import { MouseEvent, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Skeleton from '@mui/material/Skeleton'

import LogoImg from './img/nossa-matilha-navbar-logo.png'
import { DbUser, DBUserRole } from 'hooks/services/users'

interface MenuOption {
  label: string
  roles: 'all' | DBUserRole[]
  linkTo?: string
  onClick?: () => void
}

interface MenuOptions {
  mainMenu: MenuOption[]
  settingsMenu: MenuOption[]
}

interface Props {
  user?: DbUser
  logout: () => void
}

const Brand = () => (
  <Link href="/admin">
    <a>
      <Image src={LogoImg} alt="Nossa Matilha" width={163} height={60} />
    </a>
  </Link>
)

const handleUserAccess = (currentUser?: DbUser) => (menu: MenuOption) => {
  if (!currentUser) {
    return false
  }
  if (menu.roles === 'all') {
    return true
  }
  return menu.roles.includes(currentUser?.role)
}

const AdminNavbar = ({ user, logout }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleMenuOnClick = (option: MenuOption) => {
    option.onClick?.()
    if (option.linkTo) {
      router.push(option.linkTo)
    }
  }

  const { mainMenu, settingsMenu } = useMemo<MenuOptions>(() => {
    const menuFilter = handleUserAccess(user)
    return {
      mainMenu: (
        [
          {
            label: 'Usuários',
            linkTo: '/admin/users',
            roles: [DBUserRole.admin],
          },
        ] as MenuOption[]
      ).filter(menuFilter),
      settingsMenu: (
        [
          {
            label: 'Sair',
            roles: 'all',
            onClick: () => {
              logout()
            },
          },
        ] as MenuOption[]
      ).filter(menuFilter),
    }
  }, [user, logout])

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              cursor: 'pointer',
            }}
          >
            <Brand />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {mainMenu.map((option) => (
                <MenuItem
                  key={`main-menu-${option.label}`}
                  onClick={() => {
                    handleCloseNavMenu()
                    handleMenuOnClick(option)
                  }}
                >
                  <Typography textAlign="center">{option.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              mt: 1,
              mb: 1,
            }}
          >
            <Brand />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {mainMenu.map((option) => (
              <Button
                key={`button-menu-${option.label}`}
                onClick={() => {
                  handleCloseNavMenu()
                  handleMenuOnClick(option)
                }}
                sx={{ my: 2, display: 'block' }}
              >
                {option.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {user ? (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
              ) : (
                <Skeleton variant="circular" width={40} height={40} />
              )}
            </Tooltip>
            {user && (
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settingsMenu.map((setting) => (
                  <MenuItem
                    key={`settings-menu-${setting.label}`}
                    onClick={() => {
                      handleCloseUserMenu()
                      handleMenuOnClick(setting)
                    }}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AdminNavbar
