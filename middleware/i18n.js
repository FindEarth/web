export default function ({ app, store, route, redirect, hotReload, req }) {
  if (hotReload || !req) return

  const defaultLanguage = 'en'
  const acceptLanguage = req.headers['accept-language']
  let locale = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0].toLocaleLowerCase() : defaultLanguage

  if (locale !== 'en' && locale !== 'es') {
    locale = defaultLanguage
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
}
