<script>

  import HamburgerButton from '~components/util/HamburgerButton'

  export default {
    name: 'Header',

    components: { HamburgerButton },

    methods: {
      toogleMenuClass () {
        this.$el.classList.toggle('open')
      },

      toogleMenuClassItem () {
        this.$el.classList.toggle('open')
        this.$el.querySelector('.hamburger').classList.toggle('is-active')
      }
    }
  }
</script>

<template lang="pug">
  .header
    .logo
      nuxt-link(to="/")
        img.animated-logo(src="/animated-white-logo.svg")
    ul.items
      li.item(@click="toogleMenuClassItem")
        nuxt-link(to="/") Inicio
      li.item(@click="toogleMenuClassItem")
        nuxt-link(to="/about") Acerca
      li.item(@click="toogleMenuClassItem")
        nuxt-link(to="/persons") Personas
      li.item(@click="toogleMenuClassItem")
        nuxt-link(to="/sumarse") Sumarse
    .hamburguer-container(@click="toogleMenuClass")
      hamburger-button
</template>

<style lang="scss" scoped>
  .header {
    $logo-width: 40px;

    display: flex;
    align-items: center;
    height: 70px;
    background: #29235C;
    color: #fff;
    padding: 0 3em;
    z-index: 4;
    position: relative;

    &.open {
      ul.items {
        @media (max-width: 600px) {
          height: 184px;
        }
      }
    }

    .hamburguer-container {
      display: none;
      margin-left: auto;
    }

    @media (max-width: 600px) {
      .hamburguer-container {
        display: block;
      }
    }

    .logo {
      width: $logo-width;
      justify-content: flex-start;
    }

    ul.items {
      list-style: none;
      margin-left: auto;

      @media (max-width: 600px) {
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid #DAE1E9;
        height: 0;
        overflow: hidden;
        transition-duration: 0.13s;
        transition-delay: 0.13s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      li.item {
        display: inline;
        margin-left: 20px;

        @media (max-width: 600px) {
          display: block;
          width: 100%;
          border-top: 1px solid #DAE1E9;
          margin: 0;
          background: #f4f7fa;
          cursor: pointer;
        }

        a {
          color: #fff;
          text-decoration: none;
          transition: opacity .3s;
          cursor: pointer;
          font-size: 1.1em;

          @media (max-width: 600px) {
            padding: 0 3.5em;
            height: 45px;
            display: block;
            line-height: 45px;
            position: relative;
            color: #29235C;
          }

          &:hover {
            opacity: .6;
          }

          &.nuxt-link-exact-active {
            opacity: .6;

            &:hover {
              cursor: default;
            }
          }
        }
      }
    }
  }
</style>
