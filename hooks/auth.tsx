import {
  User,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { initFirebaseApp } from './_firebase'

console.log('----- setup Google Auth ------')

const handleLoggedUser = (user: User) => {
  const { displayName, email, emailVerified, photoURL } = user

  user.getIdToken().then((jwtToken) => {
    const model = {
      providerPlatform: 'firebase',
      providerId: 'google',
      jwtToken,
      displayName,
      email,
      emailVerified,
      photoURL,
    }

    console.log({ user, model })
  })
}

export const initGoogleAuth = () => {
  console.log('----- init Google Auth ------')

  const app = initFirebaseApp()
  const auth = getAuth(app)
  auth.languageCode = 'pt-BR'

  const { currentUser } = auth

  if (currentUser) {
    console.log('----- user alread logged ------')
    handleLoggedUser(currentUser)
    return
  }

  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('----- Google Auth success ------')
      console.log({ result })

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)

      console.log({ credential })

      if (credential) {
        const token = credential.accessToken

        console.log({ token })
      }

      handleLoggedUser(result.user)
    })
    .catch((error) => {
      console.log('----- Google Auth fail ------')
      console.log({ error })

      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...

      console.log({ errorCode, errorMessage, email, credential })
    })
}

export const initSignOut = () => {
  const app = initFirebaseApp()
  const auth = getAuth(app)

  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}
