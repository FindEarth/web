<script>

  import personService from '~plugins/person'
  import PersonsSubHeader from '~components/person/PersonsSubHeader'
  import PersonCard from '~components/person/PersonCard'

  export default {
    name: 'Persons',

    components: { PersonsSubHeader, PersonCard },

    data () {
      return {
        persons: [],
        loading: true
      }
    },

    async asyncData ({ params, error }) {
      return {
        persons: await personService.all()
      }
    },

    methods: {
      fetchPersons (coords) {
        this.loading = false
        console.log(coords)
      }
    }
  }
</script>

<template lang="pug">
  section#persons
    persons-sub-header(@geolocation='fetchPersons')

    p.loading(v-if='loading') Cargando...

    .row(v-else)
      .person-card-container.col-xs-12.col-sm-4.col-md-4.col-lg-3(v-for='person in persons')
        person-card(:person='person')
</template>

<style lang="scss" scoped>
  section#persons {
    p.loading {
      margin-top: 3em;
      text-align: center;
    }

    .row {
      padding: 2em 3em;

      .person-card-container {
        margin-bottom: 20px;
      }
    }
  }
</style>
