export default function config() {
  return {
    whatsApp: {
      baseURL: 'https://wa.me/',
      phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER,
    },
    firebase: {
      analytics: {
        enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
      },
      config: {
        apiKey: 'AIzaSyDeC48rNtcAZ-iXvrjtFDTuteD_8I2RwFE',
        authDomain: 'nossa-matilha.firebaseapp.com',
        projectId: 'nossa-matilha',
        storageBucket: 'nossa-matilha.appspot.com',
        messagingSenderId: '622124523832',
        appId: '1:622124523832:web:205950721a2e0dfbfca1cd',
        measurementId: 'G-XGB7F3J186',
      },
    },
    googleMaps: {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
  }
}
