<script>

  export default {
    name: 'PersonCardCreate',

    methods: {
      getPhotoSrc () {
        const photos = this.person.photos
        return photos.length ? photos[0].url : '/logo.svg'
      },

      hasPhoto () {
        return this.person.photos.length
      }
    }
  }
</script>

<template lang="pug">
  .person-create-card
    nuxt-link.report-link(to="/report")
      i.plus-icon.fa.fa-plus
</template>

<style lang="scss" scoped>
  .person-create-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: 1px solid #29235C;
    transition: 0.3s;
    border-radius: 4px;

    .report-link {
      text-decoration: none;
    }

    .plus-icon {
      width: 100%;
      text-align: center;
      height: 250px;
      font-size: 4em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      transform: translateY(-2px);
    }
  }
</style>
