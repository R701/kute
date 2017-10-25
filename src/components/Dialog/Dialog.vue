<template>
  <overlay transition="fade"
    transition-duration="300"
    ref="overlay"
    @enter="maskEnter">
    <div class="mask"
      ref="mask">
      <transition name="bounce-zoom-in"
        @enter="onDialogEnter"
        @after-leave="afterDialogLeave">
        <div :class="['dialog', state ? `-${state}` : '', {'-freezing': freezeScreen}]"
          ref="dialog"
          v-if="entered"
          @click.stop>
          <icon-close class="dialog-close"
            @click.native="close"></icon-close>
          <div class="dialog-title">
            <i :class="['dialog-icon', `${config$.iconClassPrefix}${icon}`]"
              v-if="icon"
              :style="{ fontSize: iconSize }"></i>
            <span>{{title}}</span>
          </div>
          <div class="dialog-message"
            ref="content">{{message}}</div>
          <div class="dialog-btns">
            <k-button :state="primaryButton == 'confirm' ? state : 'default'"
              @click="onConfirmClick">{{confirmText}}</k-button>
            <k-button :state="primaryButton == 'cancel' ? state : 'default'"
              @click="onCancelClick"
              v-if="!hideCancelButton">{{cancelText}}</k-button>
          </div>
        </div>
      </transition>
    </div>
  </overlay>
</template>

<script>
  import overlaying from '~mixins/overlaying'
  import withIcon from '~mixins/with-icon'
  import IconClose from '~components/_Icons/Close'
  import KButton from '~components/Button/Button'

  import props from './_props'
  import u from '~utils'

  export default {
    props,
    mixins: [overlaying, withIcon],

    components: {
      IconClose,
      KButton
    },

    data () {
      return {
        entered: false
      }
    },

    computed: {
      realTop () {
        if (u.isTolerantNumber(this.top)) {
          return this.top
        }

        if (u.isTolerantNumber(this.config$.defaultDialogTop)) {
          return this.config$.defaultDialogTop
        }

        return 100
      }
    },

    methods: {
      close () {
        this.entered = false
      },

      afterDialogLeave () {
        if (this.freezeScreen && !document.querySelector('.dialog.-freezing')) {
          document.documentElement.style.overflow = 'initial'
        }
        this.$refs.overlay.unmount()
      },

      maskEnter () {
        this.entered = true
        if (this.freezeScreen) {
          document.documentElement.style.overflow = 'hidden'
        }
      },

      onDialogEnter () {
        this.$refs.dialog.style.top = this.realTop + 'px'
        this.$refs.content.style.maxHeight = window.innerHeight - this.realTop * 2 - 67 - 72 + 'px'
      },

      onConfirmClick () {
        this.$emit('confirm')
        var stopped = false
        if (this.confirmHandler) {
          stopped = this.confirmHandler()
          console.log(stopped)
        }
        if (!stopped) {
          this.close()
        }
      },

      onCancelClick () {
        this.$emit('cancel')
        var stopped = false
        if (this.cancelHandler) {
          stopped = this.cancelHandler()
        }
        if (!stopped) {
          this.close()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .dialog
    width 487px
    absCenterX(fixed)
    min-height 225px
    background-color $black-lighter
    color $white-lighter
    border-radius 4px
    box-shadow psShadow(#000, 0.15, 90, 2px, 0, 25px), psShadow(#000, 0.3, 90, 13px, 0, 25px), psShadow(#000, 0.2, 90, 0, 0, 45px)
    transition-duration 0.3s !important

    &-close
      fill #696773
      position absolute
      top 16px - 5px
      right 24px - 5px
      padding 5px
      width 16px + 5px
      height 16px + 5px
      cursor pointer

      &:hover
        fill lighten(#696773, 50%)

    &-title
      line-height 64px
      ellipsis()
      font-size $font-size-h2
      padding 0 26px

      span
        vertical-align middle

    &-icon
      margin-right 3px
      font-size $font-size-h2
      vertical-align middle

    &-message
      padding 12px 26px
      font-size $font-size-h5
      padding-bottom 72px
      overflow hidden

    &-btns
      display flex
      flex-direction row-reverse
      justify-content flex-end
      padding-right 30px
      padding-bottom 25px
      position absolute
      bottom 0
      right 0

      .button:first-child
        margin-left 24px

  .-info
    .dialog-title
      color $state-info

  .-success
    .dialog-title
      color $state-success

  .-warn
    .dialog-title
      color $state-warn

  .-error
    .dialog-title
      color $state-error
</style>

