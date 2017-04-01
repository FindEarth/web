<script>
  import personService from 'services/person';
  import config from 'services/config';

  export default {
    name: 'person',

    data() {
      return {
        person: {},
        position: {},
        isLoading: true,
        activeTab: '1',
        mapIcon: { url: '' },
      };
    },

    mounted() {
      personService.getById(this.$route.params.personId).then((person) => {
        this.isLoading = false;
        this.person = person;
        this.mapIcon = this.person.gender === 'M' ? config.map.icon.male : config.map.icon.female;
        this.setPosition();
      });
    },

    methods: {
      setPosition() {
        this.$set(this.position, 'lat', (this.person.geo && this.person.geo.loc[1]) || 0);
        this.$set(this.position, 'lng', (this.person.geo && this.person.geo.loc[0]) || 0);
      },
    },
  };
</script>

<template lang="pug">
  section#person-detail
    el-menu(mode='horizontal')
      el-row
        el-col.menu-left-section(:span='12')
          img.animated-logo(src='/static/logo.svg')
          p.person-name {{ person.name }}
        el-col.menu-right-section(:span='12')
          el-button-group
            el-button(type='primary') Contactar
            el-button(type='primary', icon='custom-facebook')
            el-button(type='primary', icon='custom-twitter')

    gmap-map.map(v-if='position.lat && position.lng', :center='position', :zoom='14', v-loading='isLoading')
      gmap-marker(
        :position='position',
        :clickable='true',
        style='width: 30px;',
        :icon='mapIcon',
        :animation='2',
      )
      gmap-circle(
        :center='position',
        :radius='1000',
      )

    el-row.person(:gutter="20")
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
</template>

<style lang="scss">
  section#person-detail {
    .el-menu--horizontal {
      padding: 0 10px;

      .animated-logo {
        width: 45px;
        vertical-align: middle;
      }

      .person-name {
        display: inline-block;
        margin-left: 10px;
        vertical-align: middle;
      }

      .menu-right-section {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        margin: 7px 0;
      }
    }

    .map {
      height: 300px;
      margin-bottom: 30px;
    }

    .el-row.person {
      padding: 0 10px;
    }

    .el-col.details {
      h3 {
        margin: 0;
      }
    }

    .time {
      font-size: 13px;
      color: #999;
      display: inline-block;
      margin-bottom: 12px;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before, .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }
  }
</style>
