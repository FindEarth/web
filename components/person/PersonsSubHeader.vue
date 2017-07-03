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
      this.askForGeolocation()
    },

    methods: {
      askForGeolocation () {
        let lat = null
        let lng = null
        const value = prompt('a')
        if (value) {
          lat = 0
          lng = 0
        } else {
          this.onlyNearPersons = false
        }

        this.$emit('geolocation', {lat, lng})
      },

      debounceInput: debounce(function (e) {
        // TODO: call API
        console.log(e.target.value)
      }, 500),

      switchChange (value) {
        this.onlyNearPersons = value
      }
    }
  }
</script>

<template lang="pug">
  .sub-header

    .left
      input.search(type='search' name='search' placeholder='Buscar' @input='debounceInput')

    .right
      p.near-persons-label Filtrar por cercanía
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
      .search {
        min-width: 200px;
        width: 40%;
        border: 1px solid #DAE1E9;
        padding: 10px;
        font-size: 1em;
        font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
        border-radius: 2px;

        &:focus {
          width: 100%;
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
