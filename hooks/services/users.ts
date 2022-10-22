import {
  collection,
  getDoc,
  query,
  doc,
  setDoc,
  serverTimestamp,
  orderBy,
  limit,
  getDocs,
  Timestamp,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore'
import { getFirebaseFirestore } from './database/firebase'

const USERS_COLLECTION_NAME = 'users'

export enum DBUserProviderCode {
  google = 'google',
  facebook = 'facebook',
  twitter = 'twitter',
  unknown = 'unknown',
}

const DBUserProviderLabel: Record<DBUserProviderCode, string> = {
  [DBUserProviderCode.google]: 'Google',
  [DBUserProviderCode.facebook]: 'Facebook',
  [DBUserProviderCode.twitter]: 'Twitter',
  [DBUserProviderCode.unknown]: 'Unknown',
}

export interface DBUserProvider {
  code: DBUserProviderCode
  uid: string
  displayName?: string
  email?: string
  phoneNumber?: string
  photoURL?: string
}

export enum DBUserRole {
  guest = 'guest',
  customer = 'customer',
  employee = 'employee',
  admin = 'admin',
}

export interface DbUser {
  id: string
  providerPlatform: 'firebase'
  providers: DBUserProvider[]
  role: DBUserRole
  jwtToken: string
  displayName: string
  email: string
  emailVerified: boolean
  photoURL?: string
  createdAt: Timestamp
  updatedAt: Timestamp
  lastLoginAt: Timestamp
}

export type DbUserPayload = Omit<
  DbUser,
  'id' | 'providerPlatform' | 'createdAt' | 'updatedAt' | 'lastLoginAt' | 'role'
> & {
  uid: string
}

const getCollection = () => {
  return collection(getFirebaseFirestore(), USERS_COLLECTION_NAME)
}

const createUser = async (userPayload: DbUserPayload): Promise<void> => {
  console.log('createUser with', { userPayload })

  const { uid, ...payload } = userPayload
  const currentDateTime = serverTimestamp()

  await setDoc(doc(getFirebaseFirestore(), USERS_COLLECTION_NAME, uid), {
    ...payload,
    role: 'guest',
    providerPlatform: 'firebase',
    createdAt: currentDateTime,
    updatedAt: currentDateTime,
    lastLoginAt: currentDateTime,
  })
}

const updateLoginUser = async (
  docRef: DocumentReference,
  persistedUser: DbUser,
  userPayload: DbUserPayload
) => {
  const updatePayload: Partial<DbUser> = {
    lastLoginAt: serverTimestamp() as Timestamp,
  }
  let hasChanges = false

  if (!persistedUser.photoURL && userPayload.photoURL) {
    hasChanges = true
    updatePayload.photoURL = userPayload.photoURL
  }

  if (!persistedUser.displayName && userPayload.displayName) {
    hasChanges = true
    updatePayload.displayName = userPayload.displayName
  }

  if (!persistedUser.emailVerified && userPayload.emailVerified) {
    hasChanges = true
    updatePayload.emailVerified = userPayload.emailVerified
  }

  if (hasChanges) {
    updatePayload.updatedAt = serverTimestamp() as Timestamp
  }

  await updateDoc(docRef, updatePayload)
}

export const getUser = async (uid: string): Promise<DbUser> => {
  const docRef = doc(getCollection(), uid)

  const persistedUser = await getDoc(docRef)

  if (!persistedUser.exists()) {
    throw new Error('User not found')
  }

  return persistedUser.data() as DbUser
}

export const findOrCreateUser = async (
  userPayload: DbUserPayload
): Promise<DbUser> => {
  const docRef = doc(getCollection(), userPayload.uid)

  const persistedDoc = await getDoc(docRef)

  if (persistedDoc.exists()) {
    const persistedUser = persistedDoc.data() as DbUser
    await updateLoginUser(docRef, persistedUser, userPayload)
  } else {
    await createUser(userPayload)
  }

  // Get fresh data
  return await getUser(userPayload.uid)
}

export const findUsers = async (): Promise<DbUser[]> => {
  const result: DbUser[] = []

  const citiesRef = getCollection()

  const users = query(citiesRef, orderBy('displayName'), limit(50))

  const querySnapshot = await getDocs(users)

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
    result.push({
      id: doc.id,
      ...doc.data(),
    } as DbUser)
  })

  return result
}
