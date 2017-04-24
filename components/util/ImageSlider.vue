<script>
  let interval
  export default {
    name: 'ImageSlider',
    props: {
      items: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 1
      },
      moveSize: {
        type: Number,
        default: 1
      }
    },

    data () {
      return {
        from: 0,
        to: 0
      }
    },

    mounted () {
      this.loadCurrents()
      this.setSliderInterval()
    },

    destroyed () {
      this.clearSliderInterval()
    },

    watch: {
      items () {
        this.loadCurrents()
      }
    },

    methods: {
      clearSliderInterval () {
        clearInterval(interval)
      },

      setSliderInterval () {
        interval = setInterval(() => { this.nextPage() }, 5000)
      },

      loadCurrents () {
        if (this.items) {
          this.to = parseInt(this.pageSize)
        }
      },

      nextPage () {
        if (this.items && this.items.length) {
          if (this.to >= this.items.length) {
            this.to = parseInt(this.pageSize)
            this.from = 0
          } else {
            this.from += this.moveSize
            this.to += this.moveSize
          }
          this.clearSliderInterval()
          this.setSliderInterval()
        }
      }
    }
  }
</script>

<template lang="pug">
.image-slider
  div(
    v-for="(c, i) in items",
    v-show="i >= from && i < to"
  )
    a(:href="c.linkUrl", target="_blank")
      transition(name="fade")
        img(
          :src="c.url",
          :alt="c.name",
          :title="c.name",
          v-show="i >= from && i < to"
        )
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
