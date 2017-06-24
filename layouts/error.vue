<script>

  export default {
    props: {
      error: {}
    }
  }

</script>

<template lang="pug">
  section#error
    p.title {{ error.statusCode }}
    p.info {{ error.message }}
</template>

<style lang="scss">
  section#error {
    text-align: center;
    color: #29235C;

    p.title {
      font-weight: 600;
      font-size: 5em;
    }

    p.info {
      font-size: 3em;
      font-weight: 300;
    }
  }
</style>
