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
  main
    person-meta-tags(:person='person')
    nav
      .content
        .row
          .five.columns
            .logo
              nuxt-link(to="/")
                img(src='/animated-logo.svg')
              h3 Find Earth
          .seven.columns.action-button-column
            .action-buttons
              c-button.action-button(@click="showModal = true", name='Detalle')
              c-button.action-button(@click='contact', name='Contactar')

    .content
      .message.animated.fadeIn(v-if='person.name')
        h1
          <strong class="link" @click="showModal = true">{{ person.name }}</strong> se perdió el {{ person.lastSeenAt | date }} en {{ person.geo.city }}.</h1>
        .help-found
          h1 Ayudanos a encontrarlo:
          span.social-icons
            i.fa.fa-facebook(@click='sharePerson("facebook")')
            i.fa.fa-twitter(@click='sharePerson("twitter")')


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
  main {
    height: 95vh;
  }

  nav {
    .content {
      margin-top: 10px;
    }
  }

  .content {
    position: relative;
    height: 80%;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
    box-sizing: border-box;

    .logo {
      display: flex;

      img {
        width: 45px;
      }
    }

    .action-button-column {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
    }
    .action-buttons {
      margin-top: 5px;
      margin-left: auto;
    }
    .action-button {
      margin-left: 5px;
    }

    .message {
      margin-top: 50px;
      margin-bottom: 50px;

      .help-found {
        display: inline-flex;
        .social-icons {
          margin-left: 20px;
          color: #29235C;

          i {
            width: 30px;
            font-size: 2.5rem;
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

      h1 {
        margin: 0;
        font-weight: 300;
        font-size: 2.2em;
        line-height: 1.4;
        strong {
          font-weight: 700;
          color: #29235C;
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
