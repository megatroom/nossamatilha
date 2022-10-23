import {
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirebaseAuth } from './database/firebase'
import {
  DbUser,
  DbUserPayload,
  DBUserProvider,
  DBUserProviderCode,
  EMPTY_DISPLAY_NAME_PLACEHOLDER,
  findOrCreateUser,
} from './users'

const castProviderIdToAuthProviderCode = (
  providerId: string
): DBUserProviderCode => {
  switch (providerId) {
    case 'google.com':
      return DBUserProviderCode.google
    case 'facebook.com':
      return DBUserProviderCode.facebook
    case 'twitter.com':
      return DBUserProviderCode.twitter
    default:
      return DBUserProviderCode.unknown
  }
}

const handleLoggedUser = async (user: User): Promise<DbUserPayload> => {
  const { uid, displayName, email, emailVerified, photoURL } = user

  const jwtToken = await user.getIdToken()

  if (!email) {
    throw Error('User without email')
  }

  const providers = user.providerData.map<DBUserProvider>((provider) => {
    const result: DBUserProvider = {
      code: castProviderIdToAuthProviderCode(provider.providerId),
      uid: provider.uid,
    }

    if (provider.displayName) {
      result.displayName = provider.displayName
    }

    if (provider.email) {
      result.email = provider.email
    }

    if (provider.phoneNumber) {
      result.phoneNumber = provider.phoneNumber
    }

    if (provider.photoURL) {
      result.photoURL = provider.photoURL
    }

    return result
  })

  const result: DbUserPayload = {
    displayName: displayName || EMPTY_DISPLAY_NAME_PLACEHOLDER,
    uid,
    jwtToken,
    email,
    emailVerified,
    providers,
  }

  if (photoURL) {
    result.photoURL = photoURL
  }

  return result
}

export const isAuthenticated = (): boolean => {
  try {
    const { currentUser } = getFirebaseAuth()

    if (currentUser) {
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
  const auth = getFirebaseAuth()

  await signInWithRedirect(auth, provider)
}

/**
 * Start the sign in process with Facebook provider.
 */
export const initFacebookAuth = async () => {
  const provider = new FacebookAuthProvider()
  const auth = getFirebaseAuth()

  await signInWithRedirect(auth, provider)
}

/**
 * Start the sign in process with Twitter provider.
 */
export const initTwitterAuth = async () => {
  const provider = new TwitterAuthProvider()
  const auth = getFirebaseAuth()

  await signInWithRedirect(auth, provider)
}

/**
 * Sign out the current user.
 */
export const initSignOut = async (): Promise<void> => {
  const auth = getFirebaseAuth()

  await signOut(auth)
}

export const observeAuthState = (
  callback: (user: DbUser | undefined) => void
) => {
  onAuthStateChanged(getFirebaseAuth(), (user) => {
    if (user) {
      handleLoggedUser(user)
        .then(findOrCreateUser)
        .then(callback)
        .catch((err) => {
          console.error('Error getting user from database', err)
          callback(undefined)
        })
    } else {
      callback(undefined)
    }
  })
}
