// Custom theme #00bcd4 for element-ui https://elementui.github.io/theme-preview/#/en-US
import 'styles/custom-theme/index.css';
import VueHead from 'vue-head';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/es';
import * as VueGoogleMaps from 'vue2-google-maps';
import config from 'services/config';
import Vue from 'vue';

import App from './App';
import router from './router';

Vue.use(ElementUI, { locale });

Vue.use(VueHead);

Vue.use(VueGoogleMaps, {
  load: {
    key: config.googleMapsKey,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
