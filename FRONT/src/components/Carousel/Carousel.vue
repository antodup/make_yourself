<template>
  <section class="carousel">
    <!--<button class="carousel_nav carousel_prev" @click.prevent="prev">Précédent</button>-->
    <slot></slot>
    <!--<button class="carousel_nav carousel_next" @click.prevent="next">Suivant</button>-->
    <div class="carousel_pagination">
      <button v-for="n in slidesCount" @click="goTo(n-1)" :class="{active: n-1 === index}">{{ n }}</button>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        index: 0,
        slides: [],
        direction: null
      }
    },
    mounted() {
      this.slides = this.$children
      this.slides.forEach((slide, i) => {
        slide.index = i
      })
    },
    computed: {
      slidesCount() {
        return this.slides.length
      }
    },
    methods: {
      next() {
        this.index++
        this.direction = 'top'
        if (this.index >= this.slidesCount) {
          this.index = 0
        }
      },
      prev() {
        this.index--
        this.direction = 'bottom'

        if (this.index < 0) {
          this.index = this.slidesCount - 1
        }
      },
      goTo(index){
        this.direction = index > this.index ? 'top' : 'bottom'
        this.index = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
