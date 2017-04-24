<script>
  import CFooter from '~components/layout/Footer'

  export default {
    name: 'Home',

    components: { CFooter },

    data () {
      return {
        lang: 'en'
      }
    },

    mounted () {
      setInterval(() => {
        this.lang = this.lang === 'en' ? 'es' : 'en'
      }, 7000)
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
    section#home.content
      div
        a(href="https://opencollective.com/findearth", target="_blank")
          img.animated-logo(src="/animated-logo.svg")
        h1  Find Earth
        transition(name="move")
          h3(v-show="lang === 'en'")  Help non-profit organizations and governments find missing people around the world.
        transition(name="move")
          h3(v-show="lang === 'es'")  Ayudamos a gorbiernos y organizaciones sin fines de lucro a encontrar personas perdidas por todo el mundo

    c-footer
</template>

<style lang="scss">
  main {
    height: 100vh;
  }

  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #29235C;;
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .animated-logo {
      width: 350px;
      transition: opacity 0.3s;
      -webkit-transition: opacity 0.3s;
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
</style>
