<script>

  export default {
    name: 'PersonCard',

    props: {
      person: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
      }
    },

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
  .person-card
    nuxt-link.person-link(:to="'/person/' + person.slug")
      img(:src='getPhotoSrc()', :class="{ 'no-photo': !hasPhoto() }", alt='Photo', style='width:100%')
      .detail
        h4.truncate
          b {{ person.name }}
        p {{ person.age }} años
</template>

<style lang="scss" scoped>
  .person-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: .5em;
    border-radius: 4px;

    .person-link {
      text-decoration: none;
    }

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
      height: 250px;
      &.no-photo {
        object-fit: inherit !important;
      }
    }

    .detail {
      padding: 2px 16px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      transform: translateY(-2px);
    }
  }
</style>
