<template>
  <floater transition="bounce-drop"
           transition-duration="300"
           ref="floater"
           @enter="onEnter">
    <div :class="['toast', `-${state}`, { '-closable': closable, '-loading': loading && message, '-loading-only': loading && !message }]"
         ref="main">
      <spinner class="toast-spinner"
               v-if="loading"></spinner>
      <div class="toast-message"
           v-if="message">{{message}}</div>
      <icon-close class="toast-close"
                  v-if="closable"
                  @click.native="close"></icon-close>
    </div>
  </floater>
</template>

<script>
  import Spinner from '~components/Spinner/Spinner'
  import IconClose from '~components/_Icons/Close'

  import floatable from '~mixins/floatable'
  import props from './_props'

  import u from '~utils'
  export default {
    props,
    mixins: [floatable],

    components: {
      Spinner,
      IconClose
    },

    data () {
      return {
        timeout: null
      }
    },

    computed: {
      realTop () {
        if (u.isTolerantNumber(this.top)) {
          return this.top
        }

        if (u.isTolerantNumber(this.config$.defaultToastTop)) {
          return this.config$.defaultToastTop
        }

        return 100
      }
    },

    mounted () {
      this.startCountDown()
    },

    methods: {
      startCountDown () {
        if (this.duration > 0) {
          this.timeout = setTimeout(this.close, this.duration)
        }
      },

      close () {
        clearTimeout(this.timeout)
        this.$refs.floater.unmount()
      },

      onEnter () {
        this.$refs.main.style.top = this.realTop + 'px'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.toast
  min-width 36px
  padding 0 18px
  height 36px
  line-height 36px
  text-align center
  border-radius 18px
  background-color $theme-primary
  absCenterX(fixed)
  top 100px
  font-size 16px
  box-shadow psShadow(#000, .76, 90, 8px, 0, 35px), psShadow(#000, .5, -90, 1px, 0, 2px, true), psShadow(#fff, .5, 90, 1px, 0, 2px, true)
  color $white
  display flex
  align-items center
  &-close
    fill $white
    display inline-block
    cursor pointer
    height 22px
    width 22px
    absCenterY()
    right 10px
    padding 5px
    transition fill .2s
    &:hover
      fill $white-darker
  &-spinner
    height 1.5em

.-loading
  padding-left 36px
  .toast-spinner
    absCenterY()
    left 7px
.-loading-only
  .toast-spinner
    absCenter()
    position absolute !important
.-closable
  padding-right 18px + 22px
.-info
  background-color: $state-info
.-success
  background-color: $state-success
.-warn
  background-color: $state-warn
.-error
  background-color: $state-error

</style>
