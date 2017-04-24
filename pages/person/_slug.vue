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

        defaultContact: config.contact,

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
          twitter: `${config.social.twUrl}?text=${text}`,
          facebook: `${config.social.fbUrl}?u=${url}`
        }

        window.open(sources[source])
      },

      toggleDescriptionModal () {
        this.showDescriptionModal = !this.showDescriptionModal
      },

      toggleContactModal () {
        this.showContactModal = !this.showContactModal
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
          c-button.action-button(@click="toggleDescriptionModal", name='Detalle', v-if='person.description')
          c-button.action-button(@click='toggleContactModal', name='Contactar')

    .row
      .col-xs-12
        .message.animated.fadeIn(v-if='person.name')
          h1
            b.link(@click="toggleDescriptionModal") {{ person.name }}
            |  {{ `(${person.age} años)` }} se perdió el
            b  {{ person.lastSeenAt | date }}
            |  en
            b  {{ person.geo.city }}.
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

    modal(
      v-if='showDescriptionModal',
      @close='toggleDescriptionModal'
    )
      h3(slot='header')
        span.description-title {{ person.name }}
        |  {{ `(${person.age} años)` }}
      div(slot='body')
        p(v-if='person.description && person.description.appearance')
          b.description-title Apariencia
          | : {{ this.person.description.appearance }}
        p(v-if='person.description && person.description.clothing')
          b.description-title Vestimenta
          | : {{ this.person.description.clothing }}
        p(v-if='person.description && person.description.more')
          b.description-title Mas informacion
          | : {{ this.person.description.more }}

    modal(
      v-if='showContactModal',
      @close='toggleContactModal'
    )
      h3(slot='header')
        | Si tenes información sobre
        span.description-title  {{ person.name }}
        |  contactános:
      div(slot='body')
        p(v-if="person.organization.emails || defaultContact.email")
          b.description-title Email:&nbsp;
          a(v-if='person.organization.emails', v-for="e in person.organization.emails", :href="`mailto:${e}`")
            | {{ e }}&nbsp;
          a(v-else-if="defaultContact.email", :href="`mailto:${defaultContact.email}`")
            | {{ defaultContact.email }}
        p(v-if="person.organization.phones || defaultContact.phone")
          b.description-title Teléfono:&nbsp;
          a(v-if='person.organization.phones', v-for="p in person.organization.phones", :href="`tel:${p}`")
            | {{ p }}&nbsp;
        p(v-if="defaultContact.emergencyPhone")
          b.description-title Teléfono de Emergencia:&nbsp;
          a(:href="`tel:${defaultContact.emergencyPhone}`")
            | {{ defaultContact.emergencyPhone }}
        p(v)
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
