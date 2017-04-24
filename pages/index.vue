<script>
  import CFooter from '~components/layout/Footer'
  import CButton from '~components/util/Button'
  import Particles from '~plugins/particles'

  export default {
    name: 'Home',

    components: { CFooter, CButton },

    data () {
      return {
        lang: 'en'
      }
    },

    mounted () {
      if (process.BROWSER_BUILD && window.location.host.includes('alertasolidaria.com')) {
        this.lang = 'es'
      }
      Particles.init('particles-js')
    },

    head () {
      return {
        title: 'Find Earth'
      }
    }
  }
</script>

<template lang="pug">
  main
    .header
      .logo-container
        img.animated-logo(src="/animated-logo.svg")
      h1.title
        | Find Earth
    .decription
      h2.text-2(v-if='lang === \'es\'')
        | Ayudamos a gorbiernos y organizaciones sin fines de lucro a encontrar personas perdidas por todo el mundo.
      h2.text-2(v-if='lang === \'en\'')
        | Help non-profit organizations and governments find missing people around the world.
      .button-container
        a(href="https://opencollective.com/findearth", target="_blank")
          c-button(v-if='lang === \'es\'' name='Unite a la Causa')
          c-button(v-if='lang === \'en\'' name='Help Us')
    .footer-container
      c-footer
    #particles-js
</template>

<style lang="scss">
  main {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #29235C;
    display: flex;
    flex-direction: column;
    z-index: 1;

    .header {
      flex: 5;
      display: flex;
      flex-direction: column;
      z-index: 3;
      position: relative;

      .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

        .animated-logo {
          width: 150px;
        }
      }

      .title {
        text-align: center;
        margin: 0;
        font-weight: 600;
        font-size: 35px;
      }
    }

    .decription {
      flex: 7;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      z-index: 3;
      position: relative;

      h2 {
        text-align: center;
        max-width: 800px;
        font-size: 28px;
        font-weight: 100;
      }

      .button-container {
        margin-top: 30px;
      }
    }

    .footer-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px;
      margin: 0 20px;
      position: relative;
      z-index: 3;
    }
  }

  #particles-js {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    opacity: 0.5;
  }
</style>
