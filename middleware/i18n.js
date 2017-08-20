export default function ({ app, store, route, redirect, hotReload, req }) {
  if (hotReload || !req) return

  let locale = req.headers['accept-language'].split(',')[0].split('-')[0].toLocaleLowerCase()

  if (locale !== 'en' && locale !== 'es') {
    locale = 'en'
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
}
