<script>
  import CFooter from '~components/layout/Footer'
  import CButton from '~components/util/Button'
  import Particles from '~plugins/particles'

  export default {
    name: 'Home',

    components: { CFooter, CButton },

    data () {
      return {
        lang: ''
      }
    },

    mounted () {
      if (process.BROWSER_BUILD) {
        this.lang = window.location.host.includes('alertasolidaria.com') ? 'es' : 'en'
        Particles.init('particles-js').then(() => {
          const partcilesEl = this.$el.querySelector('#particles-js')
          partcilesEl.classList.add('animated', 'particlesFadeIn')
        })
      }
    },

    head () {
      return {
        title: 'Find Earth'
      }
    }
  }
</script>

<template lang="pug">
  main(v-if='lang').animated.fadeIn
    .home
      .logo-container
        img.animated-logo(src="/animated-logo.svg")
        h1.title
          | Find Earth
      h2.text-2(v-if='lang === \'es\'')
        | Ayudamos a gorbiernos y organizaciones sin fines de lucro a encontrar personas perdidas por todo el mundo.
      h2.text-2(v-if='lang === \'en\'')
        | Help non-profit organizations and governments find missing people around the world.
      .button-container
        a(href="https://opencollective.com/findearth", target="_blank")
          c-button(v-if='lang === \'es\'' name='Unite a la Causa')
          c-button(v-if='lang === \'en\'' name='Help Us')
    c-footer(:show-open-collective-icon='false')
    #particles-js
</template>

<style lang="scss">
  main {
    height: 100vh;
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #29235C;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 1;
    min-height: 100vh;
    justify-content: space-between;

    .logo-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;

      .animated-logo {
        width: 150px;
      }

      .title {
        text-align: center;
        margin: 0;
        font-weight: 600;
        font-size: 35px;
      }
    }

    .home {
      flex: 1;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 3;
      position: relative;

      h2 {
        text-align: center;
        max-width: 800px;
        font-size: 28px;
        font-weight: 300;
      }

      .button-container {
        margin-top: 30px;
      }
    }
  }

  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    opacity: 0.5;
  }
</style>
