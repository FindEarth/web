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
    baseUrl: 'https://api.find.earth'
  }
}

export default config
