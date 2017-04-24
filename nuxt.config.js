module.exports = {
  head: {
    title: 'Find Earth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find Earth: open source platform to help tracing missing persons' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'font-awesome/css/font-awesome.css',
    'flexboxgrid/dist/flexboxgrid.min.css',
    '~assets/css/main.css'
  ],
  loading: {
    color: '#29235C'
  },
  /*
  ** Add dependencies globally
  */
  build: {
    vendor: [
      'trae',
      'vue2-google-maps',
      'moment',
      'particles.js'
    ]
  },

  plugins: [
    { src: '~plugins/v-click-outside', ssr: false },
    { src: '~plugins/particles', ssr: false },
    { src: '~plugins/vue-google-maps' }
  ]
}
