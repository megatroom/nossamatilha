import {
  User,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  Auth,
  connectAuthEmulator,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { initFirebaseApp } from './database/firebase'
import config from './config'
import { useEffect, useState } from 'react'

export const ADMIN_ROUTER_PATH = '/admin'
export const LOGIN_ROUTER_PATH = '/auth/login'

export interface AuthUser {
  providerPlatform: 'firebase'
  providerId: 'google'
  jwtToken: string
  displayName: string
  email: string
  emailVerified: boolean
  photoURL?: string
}

const handleLoggedUser = async (user: User): Promise<AuthUser> => {
  const { displayName, email, emailVerified, photoURL } = user

  const jwtToken = await user.getIdToken()

  if (!email) {
    throw Error('User without email')
  }

  const result: AuthUser = {
    providerPlatform: 'firebase',
    providerId: 'google',
    jwtToken,
    displayName: displayName || 'Guest',
    email,
    emailVerified,
  }

  if (photoURL) {
    result.photoURL = photoURL
  }

  return result
}

let authSingleton: Auth | undefined
const buildAuth = (): Auth => {
  if (authSingleton) {
    return authSingleton
  }

  const app = initFirebaseApp()
  authSingleton = getAuth(app)

  const {
    firebase: { emulators },
  } = config()

  authSingleton.languageCode = 'pt-BR'

  if (emulators.enabled) {
    connectAuthEmulator(authSingleton, emulators.url)
  }

  return authSingleton
}

const getCurrentUser = async (): Promise<AuthUser> => {
  const auth = buildAuth()

  const { currentUser } = auth

  if (currentUser) {
    return await handleLoggedUser(currentUser)
  }

  const redirectResult = await getRedirectResult(auth)

  if (redirectResult) {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    // const credential = GoogleAuthProvider.credentialFromResult(redirectResult)
    // const token = credential?.accessToken
    // console.log({ token })

    return handleLoggedUser(redirectResult.user)
  }

  throw new Error('User not found')
}

/**
 * Indicates whether the user is authenticated.
 */
export const isAuthenticate = async (): Promise<boolean> => {
  try {
    if (await getCurrentUser()) {
      return true
    }
  } catch (error) {
    // Do nothing
  }

  return false
}

/**
 * Start the sign in process with Google provider.
 */
export const initGoogleAuth = async () => {
  const provider = new GoogleAuthProvider()
  const auth = buildAuth()

  await signInWithRedirect(auth, provider)
}

/**
 * Sign out the current user.
 */
export const initSignOut = async (): Promise<void> => {
  const auth = buildAuth()

  await signOut(auth)
}

export interface UseAuth {
  user?: AuthUser
  loading: boolean
}

/**
 * Hook to get the current user.
 * Use this hook to ensure that the user is logged in.
 *
 * @remarks
 * The hook start with `loading` equals `true` until the authentication is checked.
 * When it's done, the `user` will be fulfilled with the user data
 * and then the `loading` is set to false.
 *
 * If the user is not logged in, the user will be redirected to the login page.
 *
 */
export const useAuth = (): UseAuth => {
  const [user, setUser] = useState<AuthUser | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    getCurrentUser()
      .then((currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })
      .catch(() => {
        router.push(LOGIN_ROUTER_PATH)
      })
  }, [router])

  return { user, loading }
}
