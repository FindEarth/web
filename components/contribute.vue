<script>
  import trae from '~plugins/trae'

  export default {
    name: 'Contribute',

    data () {
      return {
        name: '',
        email: ''
      }
    },

    methods: {
      submit () {
        trae.post('/contributor', {
          name: this.name,
          email: this.email
        })
        .then((res) => this.$emit('done'))
      }
    }
  }
</script>

<template lang="pug">
  section#contribute
    form(@submit.prevent="submit")
      .form-block
        label Name
        input(type="text", v-model="name", placeholder="Name")

      .form-block
        label email
        input(type="email", v-model="email", placeholder="email")

      .form-block.submit-block
        label
        input(type="submit")
</template>

<style lang="scss" scoped>
  section#contribute {
    .form-block {
      margin-bottom: 20px;

      label {
        width: 70px;
        display: inline-block;
      }

      input {
        width: 50%;
        border: 1px solid #DAE1E9;
        padding: 10px;
        font-size: 1em;
        font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        border-radius: 2px;
      }
    }

    .submit-block {
      display: flex;
      align-items: center;
      margin-top: 40px;

      input {
        width: 30%;
      }
    }
  }
</style>
