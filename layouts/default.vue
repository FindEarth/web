<script>
  import MyFooter from '~components/Footer.vue'

  export default {
    components: {
      MyFooter
    }
  }
</script>

<template lang="pug">
  .content
    nuxt
    my-footer
</template>

<style lang="scss" scoped>
  .content {
    margin-top: 35px;
  }
</style>
