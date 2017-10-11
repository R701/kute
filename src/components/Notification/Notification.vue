<template>
  <overlay transition="bottom-in"
           ref="overlay">
    <div :class="['notification', state ? `-${state}` : '', {'-link': href}]"
         ref="main"
         @click="onClick">
      <i :class="['notification-icon', `${config$.iconClassPrefix}${icon}`]"
         v-if="icon"></i>
      <span class="notification-message">{{message}}</span>
      <icon-close class="notification-close"
                  v-if="closable"
                  @click.native="close"></icon-close>
    </div>
  </overlay>
</template>

<script>
  import props from './_props'
  import IconClose from '~components/_Icons/Close'

  import withIcon from '~mixins/with-icon'
  import overlaying from '~mixins/overlaying'
  import linkable from '~mixins/linkable'

  export default {
    props,
    mixins: [withIcon, overlaying, linkable],

    components: {
      IconClose
    },

    data () {
      return {
        timeout: null
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
        this.$refs.overlay.unmount()
      },

      onClick (evt) {
        if (this.preventDefault) {
          evt.preventDefault()
        } else if (this.href) {
          if (this.blank) {
            window.open(this.fullHref)
          } else if (this.routerObj && (this.router || this.nuxt)) {
            this.routerObj.push(this.fullHref)
          } else {
            window.location.href = this.fullHref
          }
        }

        this.clickHandler(evt)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .notification
    width 100%
    height 40px
    line-height 40px
    text-align center
    background-color alpha($theme-primary, 0.6)
    font-size 14px
    color $white
    display flex
    align-items center
    justify-content center
    position relative

    &:hover
      background-color alpha($theme-primary, 1)

    &-message
      max-width 1000px
      ellipsis()

    &-close
      fill $white
      display inline-block
      cursor pointer
      height 22px
      width 22px
      absCenterY()
      right 12px
      padding 5px
      transition fill 0.2s

      &:hover
        fill $white-darker

    &-icon
      margin-right 3px

  .-closable
    padding-right 18px + 22px

  .-link
    cursor pointer

  .-info
    background-color alpha($state-info, 0.6)

    &:hover
      background-color alpha($state-info, 1)

  .-success
    background-color alpha($state-success, 0.6)

    &:hover
      background-color alpha($state-success, 1)

  .-warn
    background-color alpha($state-warn, 0.6)

    &:hover
      background-color alpha($state-warn, 1)

  .-error
    background-color alpha($state-error, 0.6)

    &:hover
      background-color alpha($state-error, 1)
</style>

<style lang="stylus">
  .notification
    width 100%
    height 40px
    line-height 40px
    text-align center
    background-color alpha($theme-primary, 0.6)
    font-size 14px
    color $white
    display flex
    align-items center
    justify-content center
    position relative

    &:hover
      background-color alpha($theme-primary, 1)

    &-message
      max-width 1000px
      ellipsis()

    &-close
      fill $white
      display inline-block
      cursor pointer
      height 22px
      width 22px
      absCenterY()
      right 12px
      padding 5px
      transition fill 0.2s

      &:hover
        fill $white-darker

    &-icon
      margin-right 3px

  .-closable
    padding-right 18px + 22px

  .-link
    cursor pointer

  .-info
    background-color alpha($state-info, 0.6)

    &:hover
      background-color alpha($state-info, 1)

  .-success
    background-color alpha($state-success, 0.6)

    &:hover
      background-color alpha($state-success, 1)

  .-warn
    background-color alpha($state-warn, 0.6)

    &:hover
      background-color alpha($state-warn, 1)

  .-error
    background-color alpha($state-error, 0.6)

    &:hover
      background-color alpha($state-error, 1)
</style>
