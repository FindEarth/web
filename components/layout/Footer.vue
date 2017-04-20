<template lang="pug">
  .row
    .one.column
      a.keepers-logo.hover-effect(href='https://keepe.rs', target='_blank')
        img(src='/keepers-logo.png')
    .eight.columns
      span &nbsp;
    .three.columns
      .social-icons
        a.hover-effect(href='https://facebook.com/FindEarth', target='_blank')
          i.fa.fa-facebook
        a.hover-effect(href='https://twitter.com/FindEarthOrg', target='_blank')
          i.fa.fa-twitter
        a.hover-effect(href='https://github.com/FindEarth', target='_blank')
          i.fa.fa-github
</template>

<style lang="scss" scoped>
  .row {
    .keepers-logo img {
      width: 20px;
    }

    .social-icons {
      text-align: right;
      font-size: 1em;

      a {
        color: #29235C;
      }

      i.fa {
        width: 40px;
      }
    }
  }
</style>
