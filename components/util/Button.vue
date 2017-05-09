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
  .custom-button(@click="$emit('click')") {{ name }}
</template>

<style lang="scss">
  .custom-button {
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    line-height: 38px;
    letter-spacing: .1rem;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid #29235C;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
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

    @media (hover) {
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
  }
</style>
