<script>
  export default {
    name: 'home',

    head () {
      return {
        title: 'Find Earth'
      }
    },

    methods: {
      goToGitHub() {
        window.location = 'https://github.com/FindEarth';
      },
    },
  };
</script>

<template lang="pug">
  section#home
    img.animated-logo(src='/animated-logo.svg', @click='goToGitHub')
</template>

<style lang="scss">
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    display: flex;
    justify-content: center;
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
