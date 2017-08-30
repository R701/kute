<template>
  <component :is="root"
             :to="href"
             :href="href"
             :disabled="disabled || (disableWhileLoading && loading)"
             :class="['button', `-${state}-bg`, `-${size}`, { '-link': href, '-no-outline': !outline,  '-block': block,  '-no-text': emptySlot, '-ghost': ghost } ]"
             @click="onClick"
             @focus="onFocus"
             @blur="onBlur">
    <div class="button-spinner"
         v-if="loading">
      <spinner></spinner>
    </div>
    <span :class="[ 'button-text', { '-faded': loading } ]">
      <i :class="['button-icon', 'prepend', `${iconClassPrefix}${icon}`]"
         v-if="icon && iconPosition == 'prepend'"></i>
      <slot></slot>
      <i :class="['button-icon', 'append', `${iconClassPrefix}${icon}`]"
         v-if="icon && iconPosition == 'append'"></i>
    </span>
  </component>
</template>

<script>
  import props from './_props'
  import events from './_events'
  import withIcon from '~mixins/with-icon'

  import Spinner from '~components/Spinner/Spinner'

  export default {
    props: props,
    mixins: [withIcon],

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
        if (this.nuxt) {
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
        this.$emit(events.CLICK, evt)
      },

      onFocus (evt) {
        this.$emit(events.FOCUS, evt)
      },

      onBlur (evt) {
        this.$emit(events.BLUR, evt)
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
  text-transform uppercase
  line-height 1
  position relative
  min-width 80px
  height 34px
  ph(1.2em)
  no-select()
  background-color $grey-darker
  color $white
  border-radius 2px
  transition background-color .2s
  text-align center
  white-space nowrap
  @extend .-no-border
  &:not(:disabled)
    click-down()
  &:active
    background-color darken(@background-color, 12%)
  &:disabled
    background-color $grey-lighter !important
    opacity .8 !important
    cursor not-allowed !important
  &.-small
    height 24px
    min-width 56px
  &.-large
    height 44px
    min-width 104px
.button-spinner, .button-text
  cover()
  flexCenter()
.button-icon
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

@keyframes spinning
  0%
    transform rotate(0)
  50%
    transform rotate(180deg)
  100%
    transform rotate(360deg)

</style>