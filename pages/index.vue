<script>
  import CFooter from '~components/layout/Footer'

  export default {
    name: 'Home',

    components: { CFooter },

    head () {
      return {
        title: 'Find Earth'
      }
    },

    methods: {
      goToGitHub () {
        window.location = 'https://github.com/FindEarth'
      }
    }
  }
</script>

<template lang="pug">
  main
    header
      nav

    section#home.content
      div
        img.animated-logo(src="/animated-logo.svg", @click="goToGitHub")
        h1  Find Earth
        h3  Help non-profit organizations and governments find missing people around the world.

    c-footer
</template>

<style lang="scss">
  main {
    height: 100vh;
  }

  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  nav {
    height: 10px;
    background: #29235C;
  }
</style>
