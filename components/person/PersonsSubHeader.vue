<script>

  import debounce from 'debounce'
  import CSwitch from '~components/util/Switch'

  export default {
    name: 'PersonsSubHeader',

    components: { CSwitch },

    data () {
      return {
        onlyNearPersons: true
      }
    },

    mounted () {
      this.getGeolocation()
    },

    methods: {
      getGeolocation () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.setGeolocation, this.geoError)
        } else {
          this.geoError()
        }
      },

      setGeolocation (position) {
        this.$emit('geolocation', {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },

      geoError () {
        this.onlyNearPersons = false
        this.$emit('geolocation')
      },

      debounceInput: debounce(function (e) {
        this.$emit('search-name', e.target.value)
      }, 500),

      switchChange (value) {
        this.onlyNearPersons = value
        this.$emit('search-near-persons', this.onlyNearPersons)
      }
    }
  }
</script>

<template lang="pug">
  .sub-header

    .left
      input.search(type="search", name="search", :placeholder="$t('persons.subheader.search')", @input="debounceInput")

    .right
      p.near-persons-label {{ $t('persons.subheader.filterByNearest') }}
      c-switch(:model='onlyNearPersons', @change='switchChange')
</template>

<style lang="scss" scoped>
  .sub-header {
    display: flex;
    align-items: center;
    background: #f4f7fa;
    color: #fff;
    padding: 0 3em;
    border-bottom: 1px solid #DAE1E9;
    justify-content: space-between;
    padding: .5em 3em;

    @media (max-width: 750px) {
      flex-direction: column;
    }

    .left {
      flex: 1;

      @media (max-width: 750px) {
        margin-top: 15px;
      }

      .search {
        width: 200px;
        border: 1px solid #DAE1E9;
        padding: 10px;
        font-size: 1em;
        font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        border-radius: 2px;

        &:focus {
          width: 300px;
        }
      }
    }

    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;

      .near-persons-label {
        color: #29235C;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
</style>
