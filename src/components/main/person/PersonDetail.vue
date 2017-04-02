<script>
  import personService from 'services/person';
  import config from 'services/config';

  import contactButton from 'components/utils/ContactButton';
  import customFooter from 'components/layout/Footer';

  export default {
    name: 'person',

    components: { customFooter, contactButton },

    data() {
      return {
        person: {},
        position: {},
        isLoading: true,
        map: {
          options: {
            styles: config.map.styles,
            mapTypeControl: false,
            fullscreenControl: true,
          },
        },
        markerIcon: { url: '' },
      };
    },

    beforeRouteEnter(to, from, next) {
      /* eslint-disable */
      document.head.innerHTML = `
        ${document.head.innerHTML}
        <meta name="og:title" content="Find Earth - 58d8a3c58438934f13a81000">
        <meta name="og:image" content="https://find.earth/static/keepers-logo.png">
        <meta name="og:site_name" content="Find Earth">
        <meta name="og:url" content="https://find.earth/person/58d8a3c58438934f13a81000">
        <meta name="og:description" content="Open Source Platform to help tracing Missing Persons">
        <meta name="og:type" content="website">
      `;
      personService.getById(to.params.personId).then(person => {
        next(vm => {
          vm.person = person;
          vm.setPerson();
        });
      });
      /* eslint-enable */
    },

    methods: {
      setPerson() {
        this.isLoading = false;
        this.markerIcon = this.person.gender === 'M' ? config.map.icon.male : config.map.icon.female;
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
  };
</script>

<template lang="pug">
  section#person-detail

    .person-detail-top
      .wrapper

        .header
          .logo
            router-link.hover-effect(tag='img', src='/static/animated_logo.svg', :to='{name: \'home\'}')
          .contact
            contact-button(:person='person')

        .main-text(class='animated fadeIn' v-if='person.name')
          <h1><strong class="hover-effect person-name link">{{ person.name }}</strong> se perdió el 22/09/2017 en Buenos Aires.</h1>
          h1 Ayudanos a&nbsp;
            el-tooltip.find-it(effect='dark', placement='bottom')
              strong.hover-effect.link encontrarlo
              template(slot='content')
                .find-it-tooltip
                  i.fa.el-icon-custom-facebook(@click='sharePerson(\'facebook\')')
                  i.fa.el-icon-custom-twitter(@click='sharePerson(\'twitter\')')
            | .

    .person-detail-middle
      el-row.person
        el-col(:span='24')
          gmap-map.map(v-if='position.lat && position.lng', :options="map.options", :center='position', :zoom='14', v-loading='isLoading')
            gmap-marker(
              :position='position',
              :clickable='true',
              style='width: 30px;',
              :icon='markerIcon',
            )

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

    .person-detail-bottom
      .wrapper
        custom-footer
</template>

<style lang="scss">
  @import "../../../styles/variables.scss";

  section#person-detail {

    display: flex;
    flex-direction: column;
    height: 100%;

    $flexTop: 3;
    $flexMiddle: 3;
    $flexBottom: 1;

    $margin: 50px;

    .person-detail-top, .person-detail-middle, .person-detail-bottom {
      box-sizing: border-box;
    }

    .person-detail-top {
      flex: $flexTop;

      .wrapper {
        margin: $margin;
      }

      .header {
        display: flex;
        align-items: center;

        .logo img{
          width: 45px;
        }

        .contact {
          margin-left: auto;
        }
      }

      .main-text {
        margin: $margin 0;
        margin-top: $margin;

        h1 {
          margin: 0;
          font-weight: 300;
          font-size: 2.2em;
          line-height: 1.4;

          strong {
            font-weight: 700;
            color: $primary;
          }

          .person-name {
            cursor: help;
          }
        }
      }
    }

    .person-detail-middle {
      flex: $flexMiddle;
      .map {
        height: 45vh;
      }
    }

    .person-detail-bottom {
      flex: $flexBottom;
      .wrapper {
        height: 100%;
        margin: 0 $margin;
      }
    }
  }
</style>
