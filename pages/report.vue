<script>
  import trae from '~plugins/trae'
  import Datepicker from 'vuejs-datepicker'
  import config from '~plugins/config'
  import Loading from '~components/util/Loading'
  import CButton from '~components/util/Button'

  export default {
    name: 'Report',

    components: { Datepicker, Loading, CButton },

    data () {
      return {
        loading: false,

        showSent: false,

        locale: this.$store.state.locale,

        personRequest: {
          name: '',
          age: '',
          gender: 'F',
          lastSeenAt: '',
          geo: {
            loc: [],
            address: '',
            city: '',
            countryCode: '',
            country: '',
            postalCode: ''
          },
          description: {
            clothing: '',
            appearance: '',
            disappearance: ''
          },
          contacts: [{
            name: '',
            phone: '',
            email: ''
          }]
        },

        map: {
          radius: 1000,
          center: { lat: -34.603684, lng: -58.381559 },
          marker: {
            position: { lat: -34.603684, lng: -58.381559 }
          },
          options: {
            mapTypeControl: false,
            fullscreenControl: true,
            styles: config.map.style
          }
        }
      }
    },

    methods: {
      formatGeo (marker, type, format) {
        const ac = marker.address_components.find(i => i.types[0] === type)
        if (!ac) { return null }
        return ac[`${format}_name`]
      },

      onPlaceChange (marker) {
        const lat = marker.geometry.location.lat()
        const lng = marker.geometry.location.lng()
        this.map.center = { lat, lng }
        this.map.marker.position.lat = lat
        this.map.marker.position.lng = lng
        this.personRequest.geo.address = marker.formatted_address
        this.personRequest.geo.vicinity = marker.vicinity
        this.personRequest.geo.country = this.formatGeo(marker, 'country', 'long')
        this.personRequest.geo.countryCode = this.formatGeo(marker, 'country', 'short')
        this.personRequest.geo.city = this.formatGeo(marker, 'administrative_area_level_1', 'long')
        this.personRequest.geo.postalCode = this.formatGeo(marker, 'postal_code', 'short')
        this.personRequest.geo.loc = [lng, lat]
      },

      submit () {
        if (!this.personRequest.name || !this.personRequest.age || !this.personRequest.geo.address) {
          return alert('Please, complete missing person name, age and address')
        }

        this.loading = true
        trae.post('/person-request', this.personRequest)
          .then((res) => {
            this.loading = false
            this.showSent = true

            setTimeout(() => {
              this.$router.push('persons')
            }, 2000)
          })
          .catch(e => {
            this.loading = false
            console.error('Error: ', e)
          })
      }
    }
  }
</script>

<template lang="pug">
  section#report
    .content

      .missing-person
        h1 Missing Person
        .form-container
          form
            .form-block
              input(type="text", v-model="personRequest.name", placeholder="Name *")
            .form-block
              input(type="number", v-model="personRequest.age", placeholder="Age *")
            .form-block
              select(v-model="personRequest.gender")
                option(value="F") Female
                option(value="M") Male
            .form-block
              datepicker(v-model="personRequest.lastSeenAt", placeholder="Last seen date", :language="locale")
            .form-block
              textarea(v-model="personRequest.description.clothing" placeholder="Clothes")
            .form-block
              textarea(v-model="personRequest.description.appearance" placeholder="Appearance")
            .form-block.last
              textarea(v-model="personRequest.description.disappearance" placeholder="Other information")

          .map-container
            gmap-place-input(
              class-name='input',
              placeholder='Last seen address *',
              :select-first-on-enter='true',
              :default-place='personRequest.geo.address',
              @place_changed='onPlaceChange'
            )

            gmap-map.map(:center='map.center', :options='map.options', :zoom='14')
              gmap-marker(
                :position='map.marker.position',
                :clickable='true'
              )
              gmap-circle(
                :center='map.marker.position',
                :radius='1000'
              )


      .your-details
        h1 Your Details

        form
          .form-block
            input(type="text", v-model="personRequest.contacts[0].name", placeholder="Name")
          .form-block
            input(type="email", v-model="personRequest.contacts[0].email", placeholder="Email")
          .form-block
            input(type="tel", v-model="personRequest.contacts[0].phone", placeholder="Phone")

      .form-block.submit-block
        span(v-if="!showSent")
          .loading-container(v-if="loading")
            loading
          c-button(v-else name="Submit", @click="submit")
        p.sent(v-else) Report sent. Thanks.
</template>

<style lang="scss">
  section#report {
    padding: 2em 3em;

    .sent {
      margin: 0;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .missing-person {
      .form-container {
        display: flex;
        form {
          flex: 1;
          margin-right: 10px;
          .last {
            margin-bottom: 0;
          }
        }

        .map-container {
          position: relative;
          margin-left: 10px;
          flex: 1;

          .input {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 99999;
            width: 80%;
          }
          
          .map {
            height: 99%;
            .vue-map {
              height: 100%;
            }
          }
        }
      }
    }

    .form-block.submit-block {
      justify-content: flex-end;
    }
  }
</style>
