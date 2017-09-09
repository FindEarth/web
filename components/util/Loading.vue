<script>
  export default {
    name: 'Loading'
  }
</script>

<template lang="pug">
  .loading-container
    img.logo-loading.animated.logo-pulse.infinite(src="/logo.svg")
  //- .spinner
    .double-bounce1
    .double-bounce2
</template>

<style lang="scss">
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em;
  }

  @keyframes logo-pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.10, 1.10, 1.10);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .logo-pulse {
    animation-name: logo-pulse;
  }

  .logo-loading {
    width: 100px;
  }

  .spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #29235C;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>
