import config from './config'

export const buildWhatsAppURL = (text: string) => {
  const { baseURL, phoneNumber } = config().whatsApp
  const fullURL = `${baseURL}${phoneNumber}?lang=pt-BR&text=${text}`
  return encodeURI(fullURL)
}
