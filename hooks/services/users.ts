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
import UserBlockedError from 'hooks/errors/UserBlockedError'
import { getFirebaseFirestore } from './database/firebase'

export const EMPTY_DISPLAY_NAME_PLACEHOLDER = 'Guest'
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
  blocked = 'blocked',
  guest = 'guest',
  customer = 'customer',
  employee = 'employee',
  admin = 'admin',
}

export interface DbUser {
  id: string
  providerPlatform: 'firebase'
  providers: DBUserProvider[]
  testimonials: string[]
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
  | 'id'
  | 'providerPlatform'
  | 'createdAt'
  | 'updatedAt'
  | 'lastLoginAt'
  | 'role'
  | 'testimonials'
> & {
  uid: string
}

const getCollection = () => {
  return collection(getFirebaseFirestore(), USERS_COLLECTION_NAME)
}

const createUser = async (userPayload: DbUserPayload): Promise<void> => {
  const { uid, ...payload } = userPayload
  const currentDateTime = serverTimestamp()

  await setDoc(doc(getFirebaseFirestore(), USERS_COLLECTION_NAME, uid), {
    ...payload,
    role: DBUserRole.guest,
    providerPlatform: 'firebase',
    testimonials: [],
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

  if (
    (!persistedUser.displayName ||
      persistedUser.displayName === EMPTY_DISPLAY_NAME_PLACEHOLDER) &&
    userPayload.displayName
  ) {
    hasChanges = true
    updatePayload.displayName = userPayload.displayName
  }

  if (!persistedUser.emailVerified && userPayload.emailVerified) {
    hasChanges = true
    updatePayload.emailVerified = userPayload.emailVerified
  }

  if (persistedUser.providers.length !== userPayload.providers.length) {
    hasChanges = true
    updatePayload.providers = userPayload.providers
  }

  if (hasChanges) {
    updatePayload.updatedAt = serverTimestamp() as Timestamp
  }

  await updateDoc(docRef, updatePayload)
}

export type UpdateUserPayload = Pick<DbUser, 'role'>

export const updateUserByAdmin = async (
  uid: string,
  userPayload: UpdateUserPayload
): Promise<void> => {
  const docRef = doc(getCollection(), uid)

  await updateDoc(docRef, {
    ...userPayload,
    updatedAt: serverTimestamp(),
  })
}

export const getUser = async (uid: string): Promise<DbUser> => {
  const docRef = doc(getCollection(), uid)

  const persistedUser = await getDoc(docRef)

  if (!persistedUser.exists()) {
    throw new Error('User not found')
  }

  return {
    ...(persistedUser.data() as DbUser),
    id: uid,
  }
}

export const findOrCreateUser = async (
  userPayload: DbUserPayload
): Promise<DbUser> => {
  const docRef = doc(getCollection(), userPayload.uid)

  const persistedDoc = await getDoc(docRef)

  if (persistedDoc.exists()) {
    const persistedUser = persistedDoc.data() as DbUser

    if (persistedUser.role === DBUserRole.blocked) {
      throw new UserBlockedError()
    }

    await updateLoginUser(docRef, persistedUser, userPayload)
  } else {
    await createUser(userPayload)
  }

  // Get fresh data
  return await getUser(userPayload.uid)
}

export const findUsers = async (): Promise<DbUser[]> => {
  const result: DbUser[] = []

  const users = query(getCollection(), orderBy('displayName'), limit(50))

  const querySnapshot = await getDocs(users)

  querySnapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    } as DbUser)
  })

  return result
}
