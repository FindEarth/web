import mapStyles from 'services/map-styles';

const config = {};

config.googleMapsKey = 'AIzaSyBFDFmn-PL1Kg0frwZUXibuFyuiTPDMsas';

config.map = {
  styles: mapStyles,
  icon: {
    male: '/static/person-male.svg',
    female: '/static/person-female.svg',
  },
};

export default config;
