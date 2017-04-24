<template lang="pug">
  section.container
    img.logo(width='90', src='/animated-logo.svg', alt='Find Earth Logo')
    h1.title {{ error.statusCode }}
    h2.info {{ error.message }}
    nuxt-link.button(to='/', v-if='error.statusCode === 404') Homepage
</template>

<script>
  export default {
    props: {
      error: {}
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
  }

  .title {
    margin-top: 15px;
    font-size: 5em;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  }

  .button {
    margin-top: 50px;
  }
</style>
