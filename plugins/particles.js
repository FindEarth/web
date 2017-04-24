const particles = {}

if (process.BROWSER_BUILD) {
  require('particles.js/particles')
  const particlesJS = window.particlesJS
  particles.init = (domId) => {
    particlesJS.load(domId, '/particlesjs-config.json')
  }
}

export default particles
