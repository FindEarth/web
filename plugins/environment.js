const env = {
  isBrowserBuild () {
    return process.BROWSER_BUILD
  },

  isQa () {
    return document.location.href.includes('qa.find.earth')
  }
}

export default env
