<script>
  export default {
    name: 'About'
  }
</script>

<template lang="pug">
  section#about
    .content
      .what-is-it(v-html="$t('about.whatIsIt')")
      .why(v-html="$t('about.why')")
</template>

<style lang="scss">
  section#about {

    padding: 2em 3em;

    p {
      line-height: 25px;
    }

    .image-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 50%;
      }
      .description {
        margin-top: 10px;
        font-size: 0.8em;
      }
    }

  }
</style>
