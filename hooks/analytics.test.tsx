import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initAnalytics, logAnalyticEvent } from './analytics'
import config from '../config'

jest.mock('../config')
jest.spyOn(console, 'log')

const mockedConfig = jest.mocked(config)

describe('analytics', () => {
  beforeAll(() => {
    jest.mocked(console.log).mockImplementation(() => {
      return
    })
  })

  describe('When analytics is enabled', () => {
    beforeAll(() => {
      mockedConfig.mockReturnValue({
        //@ts-expect-error
        firebase: {
          analytics: {
            enabled: true,
          },
        },
      })
    })

    afterAll(() => {
      jest.clearAllMocks()
    })

    describe('initAnalytics()', () => {
      it('should init analytics', () => {
        initAnalytics()

        expect(initializeApp).toHaveBeenCalled()
        expect(getAnalytics).toHaveBeenCalled()

        expect(console.log).toHaveBeenCalledWith('[analytics]', 'initialized')
      })
    })

    describe('logAnalyticEvent()', () => {
      it('should log event', () => {
        initAnalytics()

        logAnalyticEvent('event-name', { a: 1, b: 2 })

        expect(logEvent).toHaveBeenCalledWith({}, 'event-name', {
          a: 1,
          b: 2,
        })
      })
    })
  })

  describe('When analytics is disabled', () => {
    beforeEach(() => {
      mockedConfig.mockReturnValue({
        //@ts-expect-error
        firebase: {
          analytics: {
            enabled: false,
          },
        },
      })
    })

    afterAll(() => {
      jest.clearAllMocks()
    })

    describe('initAnalytics()', () => {
      it('should not init analytics', () => {
        initAnalytics()

        expect(initializeApp).not.toHaveBeenCalled()
        expect(getAnalytics).not.toHaveBeenCalled()

        expect(console.log).toHaveBeenCalledWith('[analytics]', 'disabled')
      })
    })

    describe('logAnalyticEvent()', () => {
      it('should log event in console', () => {
        initAnalytics()

        logAnalyticEvent('event-name', { a: 1, b: 2 })

        expect(logEvent).not.toHaveBeenCalled()

        expect(console.log).toHaveBeenCalledWith(
          '[analytics]',
          'new event',
          'event-name',
          {
            a: 1,
            b: 2,
          }
        )
      })
    })
  })
})
