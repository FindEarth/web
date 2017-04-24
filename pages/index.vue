<script>
  import CFooter from '~components/layout/Footer'
  import CButton from '~components/util/Button'

  export default {
    name: 'Home',

    components: { CFooter, CButton },

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
    .header
      .logo-container
        a(href="https://opencollective.com/findearth", target="_blank")
          img.animated-logo(src="/animated-logo.svg")
      h1.title
        | Find Earth
    .decription
      h2.text-2
        | Ayudamos a gorbiernos y organizaciones sin fines de lucro a encontrar personas perdidas por todo el mundo
      .button-container
        a(href="https://opencollective.com/findearth", target="_blank")
          c-button(name='Unite a la Causa')
      .button-img
    .footer-container
      c-footer
    .overlay
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
    background-image: url('/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 30%;

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
          transition: opacity 0.3s;

          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
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

      .button-img {
        position: relative;
        z-index: 3;
        background-image: url('/mapita.png');
        width: 200px;
        height: 150px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-top: 40px;
      }
    }

    .footer-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px;
      position: relative;
      z-index: 3;
    }
  }

  .overlay {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    background-color: rgba(255, 255, 255, .83);
  }
</style>
