<script>

  import HamburgerButton from '~components/util/HamburgerButton'

  export default {
    name: 'Header',

    components: { HamburgerButton }
  }
</script>

<template lang="pug">
  .header
    .logo
      nuxt-link(to="/")
        img.animated-logo(src="/animated-white-logo.svg")
    ul.items
      li.item
        nuxt-link(to="/") Inicio
      li.item
        nuxt-link(to="/about") Acerca
      li.item
        nuxt-link(to="/persons") Personas
      li.item
        nuxt-link(to="/sumarse") Sumarse
      li.item.hamburguer-container
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
    padding: 0 80px;
    z-index: 4;

    .hamburguer-container {
      display: none !important;
    }

    @media (max-width: 600px) {

      li.item {
        display: none !important;
        &.hamburguer-container {
          display: inherit !important;
        }
      }
    }

    .logo {
      width: $logo-width;
      justify-content: flex-start;
    }

    ul.items {
      list-style: none;
      margin-left: auto;

      li.item {
        display: inline;
        margin-left: 20px;

        a {
          color: #fff;
          text-decoration: none;
          transition: opacity .3s;
          cursor: pointer;

          &:hover {
            opacity: .6;
          }

          &.router-link-exact-active {
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
