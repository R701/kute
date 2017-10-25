<template>
  <overlay transition="fade"
    transition-duration="300"
    ref="overlay"
    stay
    @enter="maskEnter"
    @after-leave="afterMaskLeave"
    v-if="innerShow">
    <div class="mask"
      ref="mask"
      @click="onMaskClick">
      <transition name="bounce-zoom-in-2"
        @enter="onModalEnter"
        @after-leave="afterModalLeave">
        <div :class="['modal', {'-freezing': freezeScreen}]"
          ref="modal"
          v-if="entered"
          @click.stop>
          <icon-close class="modal-close"
            v-if="!noCloseBtn"
            @click.native="close"></icon-close>
          <div :class="['modal-header', state ? `-${state}-gradient` : '']"
            v-if="$slots.header">
            <slot name="header"></slot>
          </div>
          <slot></slot>
        </div>
      </transition>
    </div>
  </overlay>
</template>

<script>
  import overlaying from '~mixins/overlaying'
  import IconClose from '~components/_Icons/Close'
  import KDivider from '~components/Divider/Divider'

  import props from './_props'
  // import u from '~utils'

  export default {
    props,
    mixins: [overlaying],

    components: {
      IconClose,
      KDivider
    },

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

      afterModalLeave () {
        if (this.freezeScreen && !document.querySelector('.modal.-freezing')) {
          document.documentElement.style.overflow = 'initial'
        }
        this.$refs.overlay.unmount()
      },

      maskEnter () {
        this.entered = true
        if (this.freezeScreen) {
          document.documentElement.style.overflow = 'hidden'
        }

        this.$emit('shown')
      },

      onModalEnter () {
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
  .modal
    min-width 487px
    min-height 43px
    absCenter(fixed)
    margin-top -45px
    background-color $black-lighter
    color $white-lighter
    border-radius 4px
    box-shadow psShadow(#000, 0.15, 90, 2px, 0, 25px), psShadow(#000, 0.3, 90, 13px, 0, 25px), psShadow(#000, 0.2, 90, 0, 0, 45px)
    transition-duration 0.3s !important
    overflow auto

    &-close
      fill #696773
      position absolute
      top 13px
      right 24px - 5px
      padding 5px
      width 16px + 5px
      height 16px + 5px
      cursor pointer
      z-index 999

      &:hover
        fill lighten(#696773, 50%)

    &-header
      padding 1em 42px 1em 1em
      font-size $font-size-h4
      line-height 1
      height 3em
      font-weight bold
      background linear-gradient(to right, $grey, $grey-lighter)

  .bounce-zoom-in-2-enter-active, .bounce-zoom-in-2-leave-active
    transition all 0.5s $ease-out-back

  .bounce-zoom-in-2-leave-active
    transition all 0.5s $ease-in-back

  .bounce-zoom-in-2-enter, .bounce-zoom-in-2-leave-to
    transform translate(-50%, -50%) scale(0.7) !important
    opacity 0 !important
</style>

