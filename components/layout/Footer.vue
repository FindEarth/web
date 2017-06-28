<script>
  export default {
    name: 'Footer',

    props: {
      showOpenCollectiveIcon: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      getFooterClass () {
        return this.$route.name === 'index' ? 'opacity' : ''
      }
    }
  }
</script>

<template lang="pug">
  footer(:class='getFooterClass()')
    .row.footer-container
      .col-xs-6.col-sm-2
        a.keepers-logo(href='https://keepe.rs', target='_blank')
          img(src='/keepers-logo.png')
      .col-xs-6.col-sm-offset-9.col-sm-1
        .social-icons
          a.opacity-hover(v-if='showOpenCollectiveIcon', href='https://opencollective.com/findearth', target='_blank')
            i.fa.fa-handshake-o
          a.opacity-hover(href='https://facebook.com/FindEarth', target='_blank')
            i.fa.fa-facebook
          a.opacity-hover(href='https://twitter.com/FindEarthOrg', target='_blank')
            i.fa.fa-twitter
          a.opacity-hover(href='https://github.com/FindEarth', target='_blank')
            i.fa.fa-github
</template>

<style lang="scss" scoped>
  footer {
    padding: 20px 3em;
    background: #f4f7fa;
    border-top: 1px solid #DAE1E9;
    z-index: 4;

    &.opacity {
      background: rgba(244, 247, 250, 0.5);
    }

    .footer-container {
      align-items: center;
    }

    // TODO: move transition on hover to a class in main.css

    .keepers-logo {
      img {
        width: 18px;
        transition: opacity 0.3s;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }

    .social-icons {
      display: flex;
      justify-content: flex-end;
      a {
        padding-left: 15px;
        color: #29235C;
        transition: opacity 0.3s;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
  }
</style>
