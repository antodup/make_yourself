<template>
  <transition :name="transition">
    <section v-show="visible" class="slide">
      <slot></slot>
    </section>
  </transition>
</template>

<script>
  export default {
    name: "CarouselSlide",
    data() {
      return {
        index: 0
      }
    },
    computed: {
      transition (){
        if (this.$parent.direction) {
        return 'slide-' + this.$parent.direction
        }
      },
      visible() {
        return this.index === this.$parent.index
      }
    }

  }
</script>

<style lang="scss" scoped>

  .slide-bottom-enter-active {
    animation: slideBottomIn 0.5s;
    @keyframes slideBottomIn {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }

  .slide-bottom-leave-active {
    animation: slideBottomOut 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    @keyframes slideBottomOut {
      from {
        transform: translateY(0%);
        opacity: 1;
      }
      to {
        transform: translateY(100%);
        opacity: 0;
      }
    }
  }

  .slide-top-enter-active {
    animation: slideTopIn 0.5s;
    @keyframes slideTopIn {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }

  .slide-top-leave-active {
    animation: slideTopOut 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    @keyframes slideTopOut {
      from {
        transform: translateY(0%);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  }


</style>
