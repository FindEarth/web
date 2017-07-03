<script>
  export default {
    name: 'Switch',

    props: {
      model: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        value: this.model
      }
    },

    watch: {
      model (newValue) {
        this.value = newValue
      }
    },

    methods: {
      onChange () {
        this.$emit('change', this.value)
      }
    }
  }
</script>

<template lang="pug">
  label.switch
    input.switch-input(type='checkbox', v-model='value', v-on:change='onChange')
    .slider.round
</template>

<style lang="scss" scoped>
  $primary: #29235C;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input.switch-input {
      display: none;
    }
  }

  /* Hide default HTML checkbox */

  /* The slider */

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input.switch-input {
    &:checked + .slider {
      background-color: $primary;
    }
    &:focus + .slider {
      box-shadow: 0 0 1px $primary;
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }

  /* Rounded sliders */

  .slider.round {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
</style>
