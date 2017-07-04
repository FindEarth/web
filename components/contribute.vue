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
        .then((res) => {
          console.log(res.data)
        })
      }
    }
  }
</script>

<template lang="pug">
  section#contribute

    form(@submit.prevent="submit")
      label Name
      input(type="text", v-model="name", placeholder="Name")

      label email
      input(type="email", v-model="email", placeholder="email")

      input(type="submit")
</template>

<style lang="scss" scoped>
</style>
