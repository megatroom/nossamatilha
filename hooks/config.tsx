export default function config() {
  return {
    whatsApp: {
      baseURL: 'https://wa.me/',
      phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER,
    },
  }
}
