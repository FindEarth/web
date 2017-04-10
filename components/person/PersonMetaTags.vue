<script>
  export default {
    name: 'PersonHead',

    props: {
      person: {
        type: Object,
        required: true,
      }
    },

    head () {
      const personPhotos = this.person.photos && this.person.photos.length ?  this.person.photos[0].url : ''
      return {
        title: this.person.name,
        meta: [
          { name: 'og:site_name', content: 'Find Earth' },
          { name: 'og:title', content: `${this.person.name} | Find Earth` },
          { name: 'og:description', content: `Ayudanos a encontrar a ${this.person.name}` },
          { name: 'og:image', content: personPhotos },
          { name: 'og:url', content: `https://find.earth/person/${this.person._id}` },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@FindEarth' },
          { name: 'twitter:title', content: `${this.person.name} | Find Earth` },
          { name: 'twitter:description', content: `Ayudanos a encontrar a ${this.person.name}` },
          { name: 'twitter:image', content: personPhotos }
        ]
      }
    }
  };
</script>

<template lang="pug">
  span(v-if='false')
</template>
