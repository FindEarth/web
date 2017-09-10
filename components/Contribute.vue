<script>
  import trae from '~plugins/trae'
  import Modal from '~components/util/Modal'
  import Loading from '~components/util/Loading'
  import CButton from '~components/util/Button'

  export default {
    name: 'Contribute',

    components: { Modal, Loading, CButton },

    data () {
      return {
        loading: false,
        name: '',
        email: ''
      }
    },

    methods: {
      submit () {
        if (!this.name || !this.email) return
        this.loading = true
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
    modal(@close="$emit('done')")
      h3(slot="header")
        span.description-title {{ $t('contributeModal.title') }}
      div(slot="body")
        p {{ $t('contributeModal.description') }}
        form(@submit.prevent="submit")
          .form-block
            input(type="text", v-model="name", placeholder="Name")

          .form-block
            input(type="email", v-model="email", placeholder="Email")

          .form-block.submit-block
            .loading-container(v-if="loading")
              loading
            c-button(v-else :name="$t('contributeModal.submit')", @click="submit")
</template>

<style lang="scss" scoped>
  section#contribute {
    .form-block {
      margin-bottom: 20px;

      input {
        width: 100%;
        border: 1px solid #DAE1E9;
        padding: 10px;
        font-size: 1em;
        font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        border-radius: 2px;
        box-sizing: border-box;
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
  }
</style>
