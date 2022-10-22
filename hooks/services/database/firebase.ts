import { initializeApp, FirebaseApp } from 'firebase/app'
import { Analytics, getAnalytics } from 'firebase/analytics'
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth'
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from 'firebase/firestore'
import config from '../../../config'

let appSingleton: FirebaseApp | null = null
const getFirebaseApp = () => {
  if (appSingleton) {
    return appSingleton
  }

  const { config: firebaseApp } = config().firebase

  appSingleton = initializeApp(firebaseApp)

  return appSingleton
}

let analyticsSingleton: Analytics | undefined
export const getFirebaseAnalytics = (): Analytics => {
  if (!analyticsSingleton) {
    analyticsSingleton = getAnalytics(getFirebaseApp())
  }

  return analyticsSingleton
}

let authSingleton: Auth | undefined
export const getFirebaseAuth = (): Auth => {
  if (authSingleton) {
    return authSingleton
  }

  authSingleton = getAuth(getFirebaseApp())

  const {
    firebase: { emulators },
  } = config()

  authSingleton.languageCode = 'pt-BR'

  if (emulators.enabled) {
    connectAuthEmulator(authSingleton, emulators.url)
  }

  return authSingleton
}

let firestoreSingleton: Firestore | undefined
export const getFirebaseFirestore = (): Firestore => {
  if (firestoreSingleton) {
    return firestoreSingleton
  }

  firestoreSingleton = getFirestore(getFirebaseApp())

  const {
    firebase: { emulators },
  } = config()

  if (emulators.enabled) {
    connectFirestoreEmulator(firestoreSingleton, 'localhost', 8080)
  }

  return firestoreSingleton
}
