const particles = {}

if (process.BROWSER_BUILD) {
  require('particles.js/particles')
  const particlesJS = window.particlesJS
  particles.init = (domId) => {
    return new Promise(resolve => {
      particlesJS.load(domId, '/particlesjs-config.json', () => {
        resolve()
      })
    })
  }
}

export default particles
