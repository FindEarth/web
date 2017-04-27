import Vue from 'vue'
import VueAnalytics from 'vue-ua'

Vue.use(VueAnalytics, {
  appName: 'Find Earth',
  appVersion: '1.0.0',
  trackingId: 'UA-98216529-1',
  debug: true
})
