<script>
  export default {
    name: 'Header',

    props: {
      title: {
        type: String,
        required: false
      }
    }
  }
</script>

<template lang="pug">
  .header
    .logo
      nuxt-link(to="/")
        img.animated-logo(src="/animated-logo.svg")
    .title(v-if="title") {{ title }}
    .social-icons
      a.opacity-hover(href="https://opencollective.com/findearth", target="_blank")
        i.fa.fa-handshake-o
      a.opacity-hover(href="https://facebook.com/FindEarth", target="_blank")
        i.fa.fa-facebook
      a.opacity-hover(href="https://twitter.com/FindEarthOrg", target="_blank")
        i.fa.fa-twitter
      a.opacity-hover(href="https://github.com/FindEarth", target="_blank")
        i.fa.fa-github
</template>

<style lang="scss" scoped>
  .header {
    $logo-width: 40px;

    display: flex;
    align-items: center;
    height: 64px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(22, 22, 22, 0.01);
    box-shadow: 0 0 2px 0px rgba(22, 22, 22, 0.2);
    border-bottom: 1px solid #DBDBDB;
    padding: 0 15px;

    .logo {
      width: $logo-width;
      justify-content: flex-start;
    }

    .title {
      flex: 1;
      text-align: center;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 1.5em;
      margin-left: 20px;
    }

    .social-icons {
      margin-left: auto;
      .fa {
        text-align: center;
        width: 25px;
        transition: opacity 0.3s;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>
