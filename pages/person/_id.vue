<script>
  import moment from 'moment'
  import personService from '~plugins/person'
  import config from '~plugins/config'
  import contactButton from '~components/util/ContactButton'
  import customFooter from '~components/layout/Footer'
  import Modal from '~components/util/Modal'

  export default {
    name: 'person',

    components: { customFooter, contactButton, Modal },

    data() {
      return {
        person: {},
        position: {},
        isLoading: true,
        map: {
          options: {
            styles: config.map.style,
            mapTypeControl: false,
            fullscreenControl: true,
          },
        },
        markerIcon: { url: '' },
        showModal: false,
      };
    },

    async asyncData ({ params, error }) {
      return {
        person: await personService.getById(params.id)
      }
    },

    mounted() {
      this.setPerson()
    },

    methods: {
      contact() {
        window.location.href = `mailto:hi@keepe.rs?subject=Información sobre ${this.person.name}`;
      },

      setPerson() {
        this.isLoading = false;
        this.markerIcon = this.person.gender === 'M' ? config.map.icons.male : config.map.icons.female;
        this.setPosition();
      },

      setPosition() {
        this.$set(this.position, 'lat', (this.person.geo && this.person.geo.loc[1]) || 0);
        this.$set(this.position, 'lng', (this.person.geo && this.person.geo.loc[0]) || 0);
      },

      sharePerson(source) {
        const text = `${this.person.name} se perdió el ${this.person.createdAt}, ayúdanos a encontrarlo: ${document.URL}`;
        const sources = {
          twitter: `https://twitter.com/intent/tweet?text=${text}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${document.URL}`,
        };
        window.open(sources[source]);
      },
    },

    filters: {
      date(date) {
        return moment(date).format('DD/MM/YYYY');
      },
    },
  };
</script>

<template lang="pug">
  .content
    .row
      .one.column
        .logo
          nuxt-link(to="/")
            img(src='/animated-findearth-logo.svg')
      .eight.columns
        span &nbsp;
      .three.columns
        a.button(@click="showModal = true") Detalle
        a.button(@click='contact') Contactar

    .message.animated.fadeIn(v-if='person.name')
      h1
        <strong class="link" @click="showModal = true">{{ person.name }}</strong> se perdió el {{ person.lastSeenAt | date }} en {{ person.geo.city }}.</h1>
      h1 Ayudanos a encontrarlo


    gmap-map.map(v-if='position.lat && position.lng', :options="map.options", :center='position', :zoom='14', v-loading='isLoading')
      gmap-marker(
        :position='position',
        :clickable='true',
        style='width: 30px;',
        :icon='markerIcon',
      )


    //- .person-detail-middle
    //-   el-row.person
    //-     el-col(:span='24')
    //-       gmap-map.map(v-if='position.lat && position.lng', :options="map.options", :center='position', :zoom='14', v-loading='isLoading')
    //-         gmap-marker(
    //-           :position='position',
    //-           :clickable='true',
    //-           style='width: 30px;',
    //-           :icon='markerIcon',
    //-         )

    //- el-row.person(:gutter="20")
      el-col(:span='8')
        .grid-content
          el-card(:body-style="{ padding: '0px' }", v-loading='isLoading')
            el-carousel(v-if='person.photos')
              el-carousel-item(v-for='photo in person.photos')
                img.image(v-bind:src='photo.url')
            div(style='padding: 14px;')
              .bottom.clearfix
                time.time {{ person.createdAt }}

      el-col.details(:span='16')
        .appearance(v-if='person.description && person.description.appearance')
          h3 Apariencia
          p {{ person.description.appearance }}
        .clothing(v-if='person.description && person.description.clothing')
          h3 Vestimenta
          p {{ person.description.clothing }}
        .more-data(v-if='person.description && person.description.more')
          h3 Más datos
          p {{ person.description.more }}

    //- .person-detail-bottom
    //-   .wrapper
    //-     custom-footer

    modal(v-if='showModal', @close='showModal = false')
      h3(slot='header') {{ person.name }}
      div(slot='body')
        p(v-if='person.description && person.description.appearance')
          <strong class="detail-title">Apariencia</strong>: {{ this.person.description.appearance }}
        p(v-if='person.description && person.description.clothing')
          <strong class="detail-title">Vestimenta</strong>: {{ this.person.description.clothing }}
        p(v-if='person.description && person.description.more')
          <strong class="detail-title">Mas informacion</strong>: {{ this.person.description.more }}
</template>

<style lang="scss" scoped>
  .content {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
    box-sizing: border-box;

    .logo {
      width: 45px;
    }

    .message {
      margin-top: 50px;
      margin-bottom: 50px;

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
    }
  }



  // section#person-detail {
  //   display: flex;
  //   flex-direction: column;
  //   height: 100%;
  //   $flexTop: 3;
  //   $flexMiddle: 3;
  //   $flexBottom: 1;
  //   $margin: 50px;
  //   .person-detail-top, .person-detail-middle, .person-detail-bottom {
  //     box-sizing: border-box;
  //   }
  //   .person-detail-top {
  //     flex: $flexTop;
  //     .wrapper {
  //       margin: $margin;
  //     }
  //     .header {
  //       display: flex;
  //       align-items: center;
  //       .logo img{
  //         width: 45px;
  //       }
  //       .contact {
  //         margin-left: auto;
  //       }
  //     }
  //     .main-text {
  //       margin: $margin 0;
  //       margin-top: $margin;
  //       h1 {
  //         margin: 0;
  //         font-weight: 300;
  //         font-size: 2.2em;
  //         line-height: 1.4;
  //         strong {
  //           font-weight: 700;
  //           color: #29235C;
  //         }
  //         .person-name {
  //           cursor: help;
  //         }
  //       }
  //     }
  //   }
  //   .person-detail-middle {
  //     flex: $flexMiddle;
  //     .map {
  //       height: 45vh;
  //     }
  //   }
  //   .person-detail-bottom {
  //     flex: $flexBottom;
  //     .wrapper {
  //       height: 100%;
  //       margin: 0 $margin;
  //     }
  //   }
  // }
  // .detail-title {
  //   color: #29235C;
  // }
</style>
