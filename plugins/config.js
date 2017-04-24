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
    baseUrl: process.env.API_URL || 'http://localhost:9090/'
  },

  contact: {
    email: 'hi@keepe.rs',
    phone: ''
  }
}

export default config
