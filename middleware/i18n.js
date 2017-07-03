export default function ({ app, store, route, params, error, redirect, hotReload }) {
  // Check if middleware called from hot-reloading, ignore
  if (hotReload) return

  // Get locale from params
  const locale = params.lang || 'en'

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'))
  }
}
