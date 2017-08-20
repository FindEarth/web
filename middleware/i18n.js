export default function ({ app, store, route, redirect, hotReload, req }) {
  // Check if middleware called from hot-reloading, ignore
  if (hotReload) return

  let locale = req.headers['accept-language'].split(',')[0].split('-')[0].toLocaleLowerCase()

  if (locale !== 'en' && locale !== 'es') {
    locale = 'en'
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'))
  }
}
