import { useEffect } from 'react'
import { logEvent } from 'firebase/analytics'
import config from '../config'
import { getFirebaseAnalytics } from './services/database/firebase'

// Singleton
let isEnabled = false

const logger = (...args: any[]) => console.log('[analytics]', ...args)

export const initAnalytics = () => {
  const { analytics: analyticsConfig } = config().firebase

  isEnabled = analyticsConfig.enabled

  if (isEnabled) {
    getFirebaseAnalytics()
    logger('initialized')
  } else {
    logger('disabled')
  }
}

export const logAnalyticEvent = (eventName: string, params?: object) => {
  if (isEnabled) {
    const analytics = getFirebaseAnalytics()

    if (analytics) {
      logEvent(analytics, eventName, params)
    } else {
      console.error(
        'New event without analytics instance initialized',
        eventName,
        params
      )
    }
  } else {
    logger('new event', eventName, params)
  }
}

export const useAnalytics = () => {
  useEffect(() => {
    initAnalytics()
  }, [])
}
