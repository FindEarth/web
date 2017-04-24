<template lang="pug">
  footer
    .row
      .col-xs-6.col-sm-2
        a.keepers-logo(href='https://keepe.rs', target='_blank')
          img(src='/keepers-logo.png')
      .col-xs-6.col-sm-offset-9.col-sm-1
        .social-icons
          a(href='https://opencollective.com/findearth', target='_blank')
            i.fa.fa-handshake-o
          a(href='https://facebook.com/FindEarth', target='_blank')
            i.fa.fa-facebook
          a(href='https://twitter.com/FindEarthOrg', target='_blank')
            i.fa.fa-twitter
          a(href='https://github.com/FindEarth', target='_blank')
            i.fa.fa-github
</template>

<style lang="scss" scoped>
  footer {
    margin-bottom: 10px;

    .keepers-logo {
      img {
        width: 18px;
      }
    }

    .social-icons {
      display: flex;
      justify-content: flex-end;

      a {
        padding-left: 15px;
        color: #29235C;
      }
    }
  }
</style>
