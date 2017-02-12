<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello 🌎',
    };
  },
};
</script>

<style scoped>
  h1 {
    font-weight: normal;
    margin: 0;
  }
</style>
