import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import config from '~plugins/config'

Vue.use(VueGoogleMaps, {
  load: {
    key: config.map.key
  }
})
