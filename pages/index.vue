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
  section#home(v-if='lang').animated.fadeIn
    .home-container
      h1.title
        | Find Earth
      h2.text-2(v-if='lang === \'es\'')
        | Ayudamos a gorbiernos y organizaciones sin fines de lucro a encontrar personas perdidas por todo el mundo.
      h2.text-2(v-if='lang === \'en\'')
        | Help non-profit organizations and governments find missing people around the world.
    #particles-js
</template>

<style lang="scss">
  section#home {

    z-index: 3;
    color: #29235c;

    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
      text-align: center;
      margin: 0;
      font-weight: 600;
      font-size: 3rem;
    }

    .home-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 3;
      position: relative;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;

      h2 {
        text-align: center;
        max-width: 800px;
        font-size: 2rem;
        font-weight: 300;
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
