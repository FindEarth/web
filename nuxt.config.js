module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find Earth: open source platform to help tracing missing persons' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: ['~assets/css/main.css'],
  loading: {
    color: '#29235C'
  },
  build: {
    vendor: ['axios']
  }
}
