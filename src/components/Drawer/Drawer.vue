<template>
  <overlay transition="fade"
    transition-duration="100"
    ref="overlay"
    stay
    @enter="maskEnter"
    @after-leave="afterMaskLeave">
    <div class="mask"
      ref="mask"
      @click="onMaskClick"
      v-if="innerShow">
      <transition :name="`slide-in-${side}`"
        @enter="onDrawerEnter"
        @after-leave="afterDrawerLeave">
        <div :class="['drawer', `-${side}-side`, {'-freezing': freezeScreen}]"
          ref="drawer"
          v-if="entered"
          @click.stop>
          <slot></slot>
        </div>
      </transition>
    </div>
  </overlay>
</template>

<script>
  import overlaying from '~mixins/overlaying'
  import props from './_props'
  export default {
    mixins: [overlaying],
    props,
    data () {
      return {
        entered: false,
        innerShow: false
      }
    },

    watch: {
      show (val) {
        if (val) {
          this.innerShow = val
        } else {
          this.close()
        }
      },

      innerShow (val) {
        this.$emit('update:show', val)
      }
    },

    methods: {
      close () {
        this.entered = false
      },

      showUp () {
        this.innerShow = true
      },

      afterDrawerLeave () {
        if (this.freezeScreen && !document.querySelector('.drawer.-freezing')) {
          document.documentElement.style.overflow = 'initial'
        }
        this.innerShow = false
      },

      maskEnter () {
        this.entered = true
        if (this.freezeScreen) {
          document.documentElement.style.overflow = 'hidden'
        }

        this.$emit('shown')
      },

      onDrawerEnter () {
        // can use refs
      },

      afterMaskLeave () {
        this.innerShow = false
        this.$emit('hidden')
      },

      onMaskClick () {
        if (this.hideOnBlur) {
          this.close()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.drawer
  position fixed
  top 0
  height 100%
  background $white
  color $black
  transform translateX(0)
  box-shadow $shadow-material
  &.-left-side
    left 0
  &.-right-side
    right 0  

.slide-in-left-enter-active, .slide-in-left-leave-active
  transition all 0.3s

.slide-in-left-leave-active
  transition all 0.3s

.slide-in-left-enter, .slide-in-left-leave-to
  transform translatex(-100%) !important

.slide-in-right-enter-active, .slide-in-right-leave-active
  transition all 0.3s

.slide-in-right-leave-active
  transition all 0.3s

.slide-in-right-enter, .slide-in-right-leave-to
  transform translatex(100%) !important
</style>
</style>

