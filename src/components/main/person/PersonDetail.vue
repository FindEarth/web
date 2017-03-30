<script>
  import personService from 'services/person';

  export default {
    name: 'person',

    data() {
      return {
        person: {},
      };
    },

    mounted() {
      personService.getById(this.$route.params.personId).then((person) => {
        this.person = person;
      });
    },
  };
</script>

<template lang="pug">
  section#person
    pre {{ person }}
</template>
