<template>
  <section class="container">
    <img width="90" src="/animated-logo.svg" alt="Find Earth Logo" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
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
