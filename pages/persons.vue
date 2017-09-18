<script>

  import personService from '~plugins/person'
  import Loading from '~components/util/Loading'
  import PersonsSubHeader from '~components/person/PersonsSubHeader'
  import PersonCard from '~components/person/PersonCard'
  import PersonCardCreate from '~components/person/PersonCardCreate'

  export default {
    name: 'Persons',

    components: { PersonsSubHeader, PersonCard, PersonCardCreate, Loading },

    data () {
      return {
        persons: [],
        loading: true,
        filterNear: true,
        coords: undefined
      }
    },

    methods: {
      fetchPersons (coords) {
        this.loading = true
        const hasCoords = coords && coords.lat || this.coords && this.coords.lat
        if (hasCoords && this.filterNear) {
          this.coords = coords || this.coords
          personService.getNear(this.coords).then(persons => {
            this.setPersons(persons)
          })
        } else {
          personService.all().then(persons => {
            this.setPersons(persons)
          })
        }
      },

      searchPersonByName (name) {
        this.loading = true
        const query = name ? { name: { $regex: name, $options: 'i' } } : {}
        personService.get(query).then(persons => {
          this.setPersons(persons)
        })
      },

      setPersons (persons) {
        this.loading = false
        this.persons = persons
      },

      changeNearFilter (value) {
        this.filterNear = value
        this.fetchPersons()
      }
    }
  }
</script>

<template lang="pug">
  section#persons
    persons-sub-header(
      @geolocation='fetchPersons',
      @search-name='searchPersonByName',
      @search-near-persons='changeNearFilter'
    )

    .no-persons(v-if='!loading && !persons.length') {{ $t('persons.noPersons') }}

    loading(v-if='loading')

    .row(v-else)
      .person-card-container.col-xs-12.col-sm-4.col-md-4.col-lg-3(v-for='person in persons')
        person-card(:person='person')
      .person-card-container.col-xs-12.col-sm-4.col-md-4.col-lg-3
        person-card-create
</template>

<style lang="scss" scoped>
  section#persons {
    .no-persons {
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
