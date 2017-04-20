<template lang="pug">
footer
  .row
    .three.columns
      p
        i.fa.fa-code
        | &nbsp;with&nbsp;
        i.fa.fa-heart
        | &nbsp;by&nbsp;
        a.keepers-logo.hover-effect(href='https://keepe.rs', target='_blank')
          img(src='/keepers-logo.png')
    .nine.columns
      .social-icons
        a.hover-effect(href='https://opencollective.com/findearth', target='_blank')
          i.fa.fa-money
        a.hover-effect(href='https://facebook.com/FindEarth', target='_blank')
          i.fa.fa-facebook
        a.hover-effect(href='https://twitter.com/FindEarthOrg', target='_blank')
          i.fa.fa-twitter
        a.hover-effect(href='https://github.com/FindEarth', target='_blank')
          i.fa.fa-github
</template>

<style lang="scss" scoped>
  footer {
    height: 6%;
    position: absolute;
    font-size: 2em;
    width: 100%;
    bottom: 0;

    p {
      color: #29235C;
      font-weight: 400;
      margin-left: 40px;
    }

    img {
      width: 32px;
    }

    border-bottom: 20px solid #29235C;
  }

  .row {
    .social-icons {
      text-align: right;
      margin-right: 35px;

      a {
        color: #29235C;
        margin-right: 15px;
      }
    }
  }
</style>
