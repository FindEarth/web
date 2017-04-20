<template lang="pug">
footer
  .content
    .row
      .five.columns
        p.code
          i.fa.fa-code
          | &nbsp;with&nbsp;
          i.fa.fa-heart
          | &nbsp;by&nbsp;
          a.keepers-logo.hover-effect(href='https://keepe.rs', target='_blank')
            img(src='/keepers-logo.png')
      .seven.columns
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
    width: 100%;
    position: fixed;
    bottom: 0;

    p.code {
      color: #29235C;
      font-weight: 400;
      margin-left: 40px;
      display: none;
    }

    img {
      width: 32px;
    }

    margin-top: 10px;
  }

  .social-icons {
    text-align: right;

    a {
      color: #29235C;
      margin-right: 15px;
    }
  }

  @media (min-width: 550px) {
    footer {
      margin: 0;
      border-bottom: 5px solid #29235C;
      font-size: 1.8em;

      .social-icons {
        margin-right: 35px;
      }

      p.code {
        display: block;
      }
    }
  }

</style>
