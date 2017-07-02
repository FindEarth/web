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

    methods: {
      debounceInput: debounce(function (e) {
        // TODO: call API
        console.log(e.target.value)
      }, 500)
    }
  }
</script>

<template lang="pug">
  .sub-header

    .left
      input.search(type='search' name='search' placeholder='Buscar' @input='debounceInput')

    .right
      p.near-persons-label Solo personas cercanas
      c-switch(:model='onlyNearPersons')
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
    height: 60px;

    @media (max-width: 750px) {
      flex-direction: column;
      padding-bottom: 25px;
    }

    .left {
      flex: 1;
      .search {
        min-width: 200px;
        width: 40%;
        border: 1px solid #DAE1E9;
        padding: 10px;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;

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
