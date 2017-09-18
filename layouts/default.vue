<script>

  import CHeader from '~components/layout/Header'
  import CFooter from '~components/layout/Footer'

  export default {
    name: 'DefaultLayout',
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

  input, select, textarea, .input {
    width: 100%;
    border: 1px solid #DAE1E9;
    padding: 10px;
    font-size: 1em;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    border-radius: 2px;
    box-sizing: border-box;
    background-color: white;
  }

  .form-block {
    margin-bottom: 20px;

    select {
      height: 44px;
    }

    &.submit-block {
      display: flex;
      align-items: center;
      margin-top: 40px;

      .loading-container {
        .spinner {
          margin: 0;
        }
      }
    }
  }
</style>
