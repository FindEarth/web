<script>
  import moment from 'moment'

  import config from '~plugins/config'
  import personService from '~plugins/person'

  import Modal from '~components/util/Modal'
  import CButton from '~components/util/Button'
  import CFooter from '~components/layout/Footer'
  import PersonMetaTags from '~components/person/PersonMetaTags'

  export default {
    name: 'Person',

    components: { CFooter, CButton, Modal, PersonMetaTags },

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
        showModal: false
      }
    },

    async asyncData ({ params, error }) {
      return {
        person: await personService.getById(params.id)
      }
    },

    mounted () {
      this.setPerson()
    },

    methods: {
      contact () {
        window.location.href = `mailto:hi@keepe.rs?subject=Información sobre ${this.person.name}`
      },

      setPerson () {
        this.isLoading = false
        this.markerIcon = this.person.gender === 'M' ? config.map.icons.male : config.map.icons.female
        this.setPosition()
      },

      setPosition () {
        this.$set(this.position, 'lat', (this.person.geo && this.person.geo.loc[1]) || 0)
        this.$set(this.position, 'lng', (this.person.geo && this.person.geo.loc[0]) || 0)
      },

      sharePerson (source) {
        const url = `https://find.earth/person/${this.person._id}`

        const date = moment(this.person.createdAt).format('DD/MM/YYYY')
        const text = `${this.person.name} se perdió el ${date}, en ` +
                     `${this.person.geo.city} ayúdanos a encontrarlo: ${url}`

        const sources = {
          twitter: `https://twitter.com/intent/tweet?text=${text}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        }

        window.open(sources[source])
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
  .content
    person-meta-tags(:person='person')

    .row.center-xs
      .col-xs-12.col-sm-2
        .logo
          nuxt-link(to='/')
            img(src='/animated-logo.svg')
      .col-xs-12.col-sm-offset-5.col-sm-5
        .action-buttons
          c-button.action-button(@click="showModal = true", name='Detalle')
          c-button.action-button(@click='contact', name='Contactar')

    .row
      .col-xs-12
        .message.animated.fadeIn(v-if='person.name')
          h1
            <strong class='link' @click='showModal = true'>{{ person.name }}</strong> se perdió el {{ person.lastSeenAt | date }} en {{ person.geo.city }}.</h1>
          .help-message
            h1 Ayudanos a encontrarlo:
            span.social-icons
              i.fa.fa-facebook(@click='sharePerson("facebook")')
              i.fa.fa-twitter(@click='sharePerson("twitter")')

    .row
      .col-xs-12
        gmap-map.map(v-if='position.lat && position.lng', :options="map.options", :center='position', :zoom='14')
          gmap-marker(
            :position='position',
            :clickable='true',
            style='width: 30px;',
            :icon='markerIcon',
          )

    c-footer

    modal(v-if='showModal', @close='showModal = false')
      h3(slot='header') {{ person.name }}
      div(slot='body')
        p(v-if='person.description && person.description.appearance')
          <strong class="description-title">Apariencia</strong>: {{ this.person.description.appearance }}
        p(v-if='person.description && person.description.clothing')
          <strong class="description-title">Vestimenta</strong>: {{ this.person.description.clothing }}
        p(v-if='person.description && person.description.more')
          <strong class="description-title">Mas informacion</strong>: {{ this.person.description.more }}
</template>

<style lang="scss" scoped>
  .content {
    height: 100vh;
    margin-left: 40px;
    margin-right: 40px;

    .logo {
      display: flex;

      @media only screen and (max-width: 500px) {
        justify-content: center;
      }

      img {
        width: 45px;
      }
    }

    .action-buttons {
      margin-top: 5px;
      display: flex;
      justify-content: flex-end;

      .action-button {
        margin-left: 5px;
      }

      @media only screen and (max-width: 500px) {
        margin-top: 30px;
      }
    }

    .message {
      margin-top: 60px;
      margin-bottom: 50px;

      h1 {
        margin: 0;
        font-weight: 300;
        font-size: 2.1em;
        line-height: 1.4;
        strong {
          font-weight: 700;
          color: #29235C;
        }
      }

      .help-message {
        display: inline-flex;

        .social-icons {
          margin-left: 20px;
          color: #29235C;

          @media only screen and (max-width: 500px) {
            display: flex;
            position: relative;
            top: 47px;
            left: -30px;
          }

          i {
            width: 30px;
            font-size: 1.6rem;
            line-height: 2;
            &:hover {
              cursor: pointer;
            }
          }
          .fa-facebook {
            &:hover {
              color: #3b5998;
            }
          }
          .fa-twitter {
            &:hover {
              color: #1dcaff;
            }
          }
        }
      }
    }

    .map {
      height: 45vh;
      margin-left: -50px;
      margin-right: -50px;
      margin-bottom: 40px;
    }

    .description-title {
      color: #29235C;
    }
  }
</style>
