import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initAnalytics, logAnalyticEvent } from './analytics'

describe('initAnalytics', () => {
  describe('when is enabled', () => {
    it('should init analytics', () => {
      initAnalytics()

      expect(initializeApp).toHaveBeenCalled()
      expect(getAnalytics).toHaveBeenCalled()
    })
  })
})

describe('logAnalyticEvent', () => {
  describe('when is enabled', () => {
    it('should log event', () => {
      initAnalytics()

      logAnalyticEvent('event-name', { a: 1, b: 2 })

      expect(logEvent).toHaveBeenCalledWith({}, 'event-name', { a: 1, b: 2 })
    })
  })
})
