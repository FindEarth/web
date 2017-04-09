module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'font-awesome/css/font-awesome.css',
    '~assets/css/normalize.css',
    '~assets/css/skeleton.css',
    '~assets/css/main.css'
  ],
  /*
  ** Add dependencies globally
  */
  build: {
    vendor: [
      'trae',
      'vue2-google-maps',
      'moment'
    ]
  },

  plugins: [
    { src: '~plugins/vue-google-maps' }
  ]
}
