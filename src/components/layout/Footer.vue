<template lang="pug">
  section#footer
    el-row.footer-row(type='flex', justify-content='center')
      el-col(:span='8')
        a.keepers-logo.hover-effect(href='https://keepe.rs', target='_blank')
          img(src='/static/keepers-logo.png')
      el-col(:span='8')
      el-col(:span='8')
        .social-icons
          a.hover-effect(href='https://facebook.com/FindEarth', target='_blank')
            i.fa.el-icon-custom-facebook
          a.hover-effect(href='https://twitter.com/FindEarthOrg', target='_blank')
            i.fa.el-icon-custom-twitter
          a.hover-effect(href='https://github.com/FindEarth', target='_blank')
            i.fa.el-icon-custom-github
</template>

<style lang="scss">
  @import "../../styles/variables.scss";

  section#footer {
    height: 100%;

    .footer-row {
      height: 100%;
      align-items: center;

      .keepers-logo img {
        width: 25px;
      }

      .social-icons {
        text-align: right;
        font-size: 1.2em;

        a {
          color: $primary;
        }

        i.fa {
          width: 50px;
        }
      }
    }
  }
</style>
