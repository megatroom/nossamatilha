import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics'
import config from './config'

// Singleton
let analytics: Analytics | undefined
let isEnabled = false

const logger = (...args: any[]) => console.log('[analytics]', ...args)

export const initAnalytics = () => {
  if (analytics) {
    return
  }

  const { analytics: analyticsConfig, config: firebaseApp } = config().firebase

  isEnabled = analyticsConfig.enabled

  if (isEnabled) {
    const app = initializeApp(firebaseApp)
    analytics = getAnalytics(app)
    logger('initialized')
  } else {
    logger('disabled')
  }
}

export const logAnalyticEvent = (eventName: string, params?: object) => {
  if (isEnabled) {
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
