<script>

  import CHeader from '~components/layout/Header'
  import CFooter from '~components/layout/Footer'

  export default {
    name: 'MainLayout',
    components: { CHeader, CFooter }
  }

</script>

<template lang="pug">
  .main
    c-header
    .content
      nuxt
    c-footer
</template>

<style lang="scss">
  .main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    flex: 1;
  }
</style>
