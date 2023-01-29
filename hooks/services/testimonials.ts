import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { getFirebaseFirestore } from './database/firebase'

const TESTIMONIALS_COLLECTION_NAME = 'testimonials'

export enum DBTestimonialStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
}

export interface DBTestimonial {
  id: string
  uid: string
  photoURL?: string
  name: string
  rating: number
  textOriginal: string
  textEdited: string
  status: DBTestimonialStatus
  authorized: boolean
  createdAt: Timestamp
}

export interface TestimonialPayload extends Omit<DBTestimonial, 'createdAt'> {}

const getCollection = () => {
  return collection(getFirebaseFirestore(), TESTIMONIALS_COLLECTION_NAME)
}

export const createTestimonial = async (
  payload: TestimonialPayload
): Promise<void> => {
  console.log('createTestimonial', {
    ...payload,
    createdAt: serverTimestamp(),
    status: DBTestimonialStatus.pending,
  })
  await addDoc(getCollection(), {
    ...payload,
    createdAt: serverTimestamp(),
    status: DBTestimonialStatus.pending,
  })
}

export const findTestimonials = async (): Promise<DBTestimonial[]> => {
  const result: DBTestimonial[] = []

  const queryResult = query(getCollection(), orderBy('createdAt'), limit(50))

  const querySnapshot = await getDocs(queryResult)

  querySnapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    } as DBTestimonial)
  })

  return result
}
