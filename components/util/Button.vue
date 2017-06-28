<script>
  export default {
    name: 'Button',

    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<template lang="pug">
  .test
    .hvr-sweep-to-right(@click="$emit('click')") {{ name }}
</template>

<style lang="scss">
  .hvr-sweep-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    border: 1px solid #29235C;
    text-transform: uppercase;
    color: #29235C;
    font-size: .8em;
    padding: 10px 30px;
    letter-spacing: .1rem;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 500;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #29235C;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover, &:focus, &:active {
      color: white;
    }

    &:hover:before, &:focus:before, &:active:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
</style>
