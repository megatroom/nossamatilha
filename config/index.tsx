interface AppConfig {
  whatsApp: {
    baseURL: string
    phoneNumber: string
  }
  firebase: {
    emulators: {
      enabled: boolean
      url: string
    }
    analytics: {
      enabled: boolean
    }
    config: {
      apiKey: string
      authDomain: string
      projectId: string
      storageBucket: string
      messagingSenderId: string
      appId: string
      measurementId: string
    }
  }
}

export default function config(): AppConfig {
  return {
    whatsApp: {
      baseURL: 'https://wa.me/',
      phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || '',
    },
    firebase: {
      emulators: {
        enabled: process.env.NEXT_PUBLIC_FIREBASE_EMULATORS_ENABLED === 'true',
        url: 'http://localhost:9099',
      },
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
