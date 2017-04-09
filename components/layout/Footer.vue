<template lang="pug" scoped>
  .container.asd
    .row
      .one-half.column
        a.keepers-logo.hover-effect(href='https://keepe.rs', target='_blank')
          img(src='/keepers-logo.png')
      //- .five.column
      //-   asd
      .one-half.column
        a.hover-effect(href='https://facebook.com/FindEarth', target='_blank')
          i.fa.fa-facebook
        a.hover-effect(href='https://twitter.com/FindEarthOrg', target='_blank')
          i.fa.fa-twitter
        a.hover-effect(href='https://github.com/FindEarth', target='_blank')
          i.fa.fa-github
</template>

<style lang="scss">
  .container {
    .row {
      .keepers-logo img {
        width: 25px;
      }

      .social-icons {
        text-align: right;
        font-size: 1.2em;

        a {
          color: #29235C;
        }

        i.fa {
          width: 50px;
        }
      }
    }
  }
</style>
