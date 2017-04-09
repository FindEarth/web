<script>
  export default {
    name: 'ContactButton',

    props: {
      person: {
        type: Object,
        required: true,
      },
    },

    methods: {
      sendEmail() {
        window.location.href = `mailto:hi@keepe.rs?subject=Información sobre ${this.person.name}`;
      },
    },
  };
</script>

<template lang="pug">
  .contact-button(@click='sendEmail') Contactar
</template>

<style lang="scss">

  .contact-button {
    flex: 1 1 auto;
    width: auto;
    padding: 10px;
    border: 2px solid #29235C;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow:hidden;
    transition: .3s;
    color: #29235C;
    font-size: .8em;
    &:after {
      position: absolute;
      transition: .3s;
      content: '';
      width: 0;
      left: 50%;
      bottom: 0;
      height: 3px;
      background: #29235C;
      height: 120%;
      left: -10%;
      transform: skewX(15deg);
      z-index: -1;
    }
    &:hover {
      cursor: pointer;
      color: white;
      &:after {
        width: 100%;
        left: 0;
        left: -10%;
        width: 120%;
      }
    }
  }
</style>
