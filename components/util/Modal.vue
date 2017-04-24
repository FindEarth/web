<script>
  export default {
    name: 'Modal'
  }
</script>

<template lang="pug">
  transition(name='modal')
    .modal-mask
      .modal-wrapper
        .modal-container
          .modal-heade
            slot(name='header')
          .modal-body
            span.close-modal-button(@click='$emit("close")') X
            slot(name='body')
</template>

<style lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 50%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .close-modal-button {
    float: right;
    position: relative;
    bottom: 25px;
    right: -12px;
    font-weight: bold;
    cursor: pointer;
    color: #29235C;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
