export default class UserBlockedError extends Error {
  constructor() {
    super('Unauthorized user.')

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UserBlockedError.prototype)
  }
}
