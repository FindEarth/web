import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps/dist/main.js'

import config from '~plugins/config'

Vue.use(VueGoogleMaps, {
  load: {
    key: config.map.key
  }
})
