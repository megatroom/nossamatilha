import { request } from './_request'

export interface LoginPayload {
  email: string
  password: string
}

export const postLogin = (payload: LoginPayload) => {
  return request('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}
