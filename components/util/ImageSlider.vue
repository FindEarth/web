<script>
  import Modal from '~components/util/Modal'

  let interval
  export default {
    name: 'ImageSlider',

    components: { Modal },

    props: {
      items: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        showModal: false,
        selectedImage: {},

        pageSize: 1,
        moveSize: 1,

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

      toggleModal (img) {
        if (img && img.url) { this.selectedImage = img }

        this.showModal = !this.showModal
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
.image-slider-container
  div(
    v-for='(c, i) in items',
    v-show='i >= from && i < to'
  )
    a(:href='c.linkUrl', target='_blank')
      transition(name='fade')
        img.image-slider(
          @click='toggleModal(c)',
          :src='c.url',
          v-show='i >= from && i < to'
        )

  .image-modal
    modal(v-show='showModal', @close='toggleModal')
      div.image-slider-modal(slot='body')
        img(:src='selectedImage.url')
</template>

<style lang="scss">
  img.image-slider {
    height: 45vh;
    max-width: 100%;
    cursor: pointer;
    object-fit: contain;
  }

  .image-slider-modal {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      max-width: 100%;
    }
  }
</style>
