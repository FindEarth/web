<script>

  import personService from '~plugins/person'
  import PersonCard from '~components/person/PersonCard'

  export default {
    name: 'Personas',

    components: { PersonCard },

    layout: 'main',

    data () {
      return {
        persons: []
      }
    },

    async asyncData ({ params, error }) {
      return {
        persons: await personService.all()
      }
    }
  }
</script>

<template lang="pug">
  section#persons
    .row
      .person-card-container.col-xs-12.col-sm-4.col-md-4.col-lg-3(v-for='person in persons')
        person-card(:person='person')
</template>

<style lang="scss" scoped>
  section#persons {
    padding: 2em 80px;

    .person-card-container {
      margin-bottom: 20px;
    }
  }
</style>
