import mapStyle from './map-style'

const config = {
  map: {
    key: 'AIzaSyBFDFmn-PL1Kg0frwZUXibuFyuiTPDMsas',
    style: mapStyle,
    icons: {
      male: '/person-male.png',
      female: '/person-female.png'
    }
  },

  api: {
    baseUrl: process.env.API_URL || 'http://localhost:9090/'
  },

  contact: {
    email: 'hi@keepe.rs',
    phone: '',
    emergencyPhone: '911'
  },

  social: {
    fbUrl: 'https://www.facebook.com/sharer/sharer.php',
    twUrl: 'https://twitter.com/intent/tweet'
  }
}

export default config
