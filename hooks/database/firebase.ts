import { initializeApp, FirebaseApp } from 'firebase/app'
import config from '../config'

let app: FirebaseApp | null = null

export const initFirebaseApp = () => {
  if (app) {
    return app
  }

  const { config: firebaseApp } = config().firebase

  app = initializeApp(firebaseApp)

  return app
}
