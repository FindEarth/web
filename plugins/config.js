import mapStyle from './map-style'

const config = {
  map: {
    key: 'AIzaSyBFDFmn-PL1Kg0frwZUXibuFyuiTPDMsas',
    style: mapStyle,
    icons: {
      male: '/person-male.svg',
      female: '/person-female.svg'
    }
  },

  api: {
    baseUrl: process.env.API_URL || 'http://qa-api.find.earth/'
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
