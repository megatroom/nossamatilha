import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  initFacebookAuth,
  initGoogleAuth,
  initSignOut,
  initTwitterAuth,
  observeAuthState,
} from './services/auth'
import { DbUser, DBUserProviderCode } from './services/users'

export const ADMIN_ROUTER_PATH = '/admin'
export const LOGIN_ROUTER_PATH = '/auth/login'
export const ROOT_ROUTER_PATH = '/'

export interface UseLogin {
  loading: boolean
  loginWithGoogle: () => Promise<void>
}

interface AuthContextState {
  setRedirectOnLogoutTo: (path: string) => void
  redirectOnLogoutTo: string
  isAuthenticating: boolean
  user?: DbUser
}

const initialAuthContextState: AuthContextState = {
  setRedirectOnLogoutTo: () => {},
  redirectOnLogoutTo: LOGIN_ROUTER_PATH,
  isAuthenticating: true,
}

export const getProviderLabel = (code: DBUserProviderCode) => {
  return DBUserProviderCode[code]
}

const AuthContext = createContext<AuthContextState>(initialAuthContextState)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DbUser | undefined>()
  const [isAuthenticating, setLoading] = useState(true)
  const [redirectOnLogoutTo, updateRedirectOnLogoutTo] = useState(
    initialAuthContextState.redirectOnLogoutTo
  )

  useEffect(() => {
    observeAuthState((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  const setRedirectOnLogoutTo = useCallback(
    (path: string) => {
      updateRedirectOnLogoutTo(path)
    },
    [updateRedirectOnLogoutTo]
  )

  return (
    <AuthContext.Provider
      value={{
        setRedirectOnLogoutTo,
        redirectOnLogoutTo,
        isAuthenticating,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

interface UseAuthProps {
  doNotRedirectOnLogout?: boolean
}

interface UseAuthResult
  extends Pick<AuthContextState, 'isAuthenticating' | 'user'> {
  logout: () => void
}

export const useAuth = (props?: UseAuthProps): UseAuthResult => {
  const router = useRouter()
  const { setRedirectOnLogoutTo, redirectOnLogoutTo, isAuthenticating, user } =
    useContext(AuthContext)
  const { doNotRedirectOnLogout } = props || {}

  useEffect(() => {
    if (!doNotRedirectOnLogout && !isAuthenticating && !user) {
      router.push(redirectOnLogoutTo)
    }
  }, [
    doNotRedirectOnLogout,
    isAuthenticating,
    user,
    router,
    redirectOnLogoutTo,
  ])

  const logout = useCallback(() => {
    setRedirectOnLogoutTo(ROOT_ROUTER_PATH)
    initSignOut().catch((error) => {
      console.error('Error trying to sign out.', error)
    })
  }, [setRedirectOnLogoutTo])

  return {
    logout,
    isAuthenticating,
    user,
  }
}

export const useLogin = () => {
  const { isAuthenticating, user } = useContext(AuthContext)
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticating) {
      if (user) {
        router.push(ADMIN_ROUTER_PATH)
      } else {
        setLoading(false)
      }
    }
  }, [isAuthenticating, user, router])

  const loginWithFacebook = useCallback(() => {
    setLoading(true)
    initFacebookAuth()
  }, [])

  const loginWithGoogle = useCallback(() => {
    setLoading(true)
    initGoogleAuth()
  }, [])

  const loginWithTwitter = useCallback(() => {
    setLoading(true)
    initTwitterAuth()
  }, [])

  return {
    loginWithFacebook,
    loginWithGoogle,
    loginWithTwitter,
    loading,
    error,
  }
}
