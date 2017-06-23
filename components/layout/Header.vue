<script>
  export default {
    name: 'Header'
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
        nuxt-link(to="/acerca") Acerca
      li.item
        nuxt-link(to="/personas") Personas
      li.item
        nuxt-link(to="/") Sumarse
</template>

<style lang="scss" scoped>
  .header {
    $logo-width: 40px;

    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 70px;
    background: #29235C;
    color: #fff;
    padding: 0 80px;

    .logo {
      width: $logo-width;
      justify-content: flex-start;
    }

    ul.items {
      list-style: none;
      margin-left: auto;

      li.item {
        display: inline;
        margin: 0 10px;

        a {
          color: #fff;
          text-decoration: none;
          transition: opacity .3s;

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
