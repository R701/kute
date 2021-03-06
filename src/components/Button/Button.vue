<template>
  <component :is="root"
    :to="fullHref"
    :href="fullHref"
    :target="blank ? '_blank' : '_self'"
    :disabled="disabled || (disableWhileLoading && loading)"
    :class="['button', size ? `-${size}` : '', state ? `-${state}-bg` : '', { '-link': href, '-no-outline': !outline,  '-block': block,  '-no-text': emptySlot, '-ghost': ghost } ]"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur">
    <div class="button-spinner"
      v-if="loading">
      <spinner></spinner>
    </div>
    <span :class="[ 'button-text', { '-faded': loading } ]">
      <i :class="['button-icon', 'prepend', `${config$.iconClassPrefix}${icon}`]"
        v-if="icon && iconPosition == 'prepend'"></i>
      <slot></slot>
      <i :class="['button-icon', 'append', `${config$.iconClassPrefix}${icon}`]"
        v-if="icon && iconPosition == 'append'"></i>
    </span>
  </component>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'
  import linkable from '~mixins/linkable'
  import size from '~mixins/size'

  import Spinner from '~components/Spinner/Spinner'

  export default {
    props: props,
    mixins: [withIcon, linkable, size],

    components: {
      Spinner
    },

    data () {
      return {
        active: false
      }
    },

    computed: {
      root () {
        if (this.blank) {
          return 'a'
        } else if (this.nuxt) {
          return 'nuxt-link'
        } else if (this.router) {
          return 'router-link'
        } else if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      },

      emptySlot () {
        return !this.$slots.default
      }
    },

    methods: {
      onClick (evt) {
        if (this.disabled || (this.loading && this.disableWhileLoading)) {
          return
        }
        this.$emit('click', evt)
      },

      onFocus (evt) {
        this.$emit('focus', evt)
      },

      onBlur (evt) {
        this.$emit('blur', evt)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require '~stylus/5_trumps/basic'
  @require '~stylus/5_trumps/form'

  .button
    display inline-block
    vertical-align middle
    line-height 1
    position relative
    min-width 80px
    height 34px
    line-height 34px
    pv(0)
    ph(1.2em)
    no-select()
    background-color $grey-darker
    color $white
    border-radius 2px
    transition background-color 0.2s
    text-align center
    white-space nowrap
    @extend .-no-border

    &:not(:disabled)
      click-down()

    &:active
      background-color darken(@background-color, 12%)

    &:disabled
      background-color $grey-lighter !important
      opacity 0.8 !important
      cursor not-allowed !important

    &.-small
      height 26px
      min-width 56px
      line-height 26px

    &.-large
      height 44px
      min-width 104px
      line-height 44px

  .button-spinner, .button-text
    cover()
    flexCenter()

  .button-icon
    height 100%
    font-size percentage(16px / 14px)

    &.prepend
      margin-right 3px

    &.append
      margin-left 3px

  .-no-text
    width auto !important

  .-ghost
    background transparent !important
    border none !important
    box-shadow none !important

    &:active
      color $white-darker

  .button + .button
    margin-left 16px

  @keyframes spinning
    0%
      transform rotate(0)

    50%
      transform rotate(180deg)

    100%
      transform rotate(360deg)
</style>