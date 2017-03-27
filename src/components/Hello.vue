<template>
  <section id="hello">
    <img class="animated-logo" src="/static/animated_logo.svg" @click="goToGitHub">
  </section>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {};
  },
  methods: {
    goToGitHub() {
      window.location = 'https://github.com/findearth';
    },
  },
};
</script>

<style scoped>
  .animated-logo {
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
  }
  .animated-logo:hover {
    cursor: pointer;
    opacity: 0.7;
  }
</style>
