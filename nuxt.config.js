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

  loading: { color: '#DAE1E9' },

  css: [
    'font-awesome/css/font-awesome.css',
    'flexboxgrid/dist/flexboxgrid.min.css',
    '~assets/css/main.css'
  ],

  router: {
    middleware: 'i18n'
  },

  build: {
    vendor: [
      'trae',
      'vue2-google-maps',
      'moment',
      'particles.js',
      'vue-i18n'
    ],

    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    {
      src: '@nuxtjs/google-analytics',
      options: {
        ua: 'UA-98216529-1'
      }
    }
  ],

  plugins: [
    { src: '~plugins/vue-google-maps' },
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ]
}
