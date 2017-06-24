<script>
  import moment from 'moment'

  import config from '~plugins/config'
  import personService from '~plugins/person'

  import ImageSlider from '~components/util/ImageSlider'
  import PersonSubHeader from '~components/person/PersonSubHeader'
  import PersonMetaTags from '~components/person/PersonMetaTags'

  export default {
    name: 'Person',

    components: { PersonSubHeader, ImageSlider, PersonMetaTags },

    data () {
      return {
        person: {},
        position: {},
        isLoading: true,

        map: {
          options: {
            styles: config.map.style,
            mapTypeControl: false,
            fullscreenControl: true
          }
        },
        markerIcon: { url: '' },

        showDescriptionModal: false,
        showContactModal: false
      }
    },

    async asyncData ({ params, error }) {
      return {
        person: await personService.getBySlug(params.slug)
      }
    },

    mounted () {
      this.setPerson()
    },

    methods: {
      setPerson () {
        this.isLoading = false
        this.markerIcon = this.person.gender === 'M' ? config.map.icons.male : config.map.icons.female
        this.setPosition()
      },

      setPosition () {
        this.$set(this.position, 'lat', (this.person.geo && this.person.geo.loc[1]) || 0)
        this.$set(this.position, 'lng', (this.person.geo && this.person.geo.loc[0]) || 0)
      }
    },

    filters: {
      date (date) {
        return moment(date).format('DD/MM/YYYY')
      }
    }
  }
</script>

<template lang="pug">
  section#person-detail

    person-sub-header(:person='person')
    person-meta-tags(:person='person')

    .details-container
      .row
        .col-xs-12
          .message.animated.fadeIn(v-if='person.name')
            h1
              |  Se perdió el
              b  {{ person.lastSeenAt | date }}
              |  en
              b(v-show="person.geo.vicinity")  {{ person.geo.vicinity }},
              b  {{ person.geo.city }}
              |  y tiene {{ `(${person.age} años)` }}.

      .row
        .col-xs-12.col-md-5.person-image(v-if="person.photos && person.photos.length")
          image-slider(:items="person.photos", :title="`${person.name} (${person.age} años)`")
        div(:class="person.photos && person.photos.length ? 'col-xs-12 col-md-7' : 'col-xs-12'")
          gmap-map.map(v-if='position.lat && position.lng', :options="map.options", :center='position', :zoom='14')
            gmap-marker(
              :position='position',
              :clickable='true',
              style='width: 30px;',
              :icon='markerIcon',
            )
</template>

<style lang="scss" scoped>
  section#person-detail {
    .message {
      margin-top: 50px;
      margin-bottom: 50px;

      h1 {
        margin: 0;
        font-weight: 300;
        font-size: 2.1em;
        line-height: 1.4;
        color: #29235C;
        b {
          font-weight: 600;
          color: #29235C;
        }
      }
    }

    .details-container {
      padding: 0 80px;

      .map {
        height: 45vh;
        margin-bottom: 40px;
      }

      .person-image {
        text-align: center;
        @media only screen and (max-width: 1023px) {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
