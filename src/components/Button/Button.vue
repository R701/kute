<template>
  <component :is="root"
             :to="href"
             :href="href"
             :disabled="disabled"
             :class="['button', `-${state}-bg`, `-${size}`, { '-link': href, '-no-outline': !outline,  '-block': block,  '-no-text': emptySlot, '-ghost': ghost } ]"
             @click="onClick"
             @focus="onFocus"
             @blur="onBlur">
    <i class="button-spinner"
       v-if="loading">
    </i>
    <i :class="[`${iconClassPrefix}${icon}`, { '-faded': loading } ]"
       v-if="icon"></i>
    <span :class="[ 'button-text', { '-faded': loading } ]">
      <slot></slot>
    </span>
  </component>
</template>

<script>
  import props from './_props'
  import events from './_events'
  import withIcon from '~mixins/with-icon'

  export default {
    props: props,
    mixins: [withIcon],
    inheritAttrs: false,

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
  display inline-flex
  align-items center
  justify-content center
  text-transform uppercase
  line-height 1
  position relative
  width 80px
  height 34px
  no-select()
  // unsmooth()
  click-down()
  background-color $grey-darker
  color $white
  border-radius 2px
  transition background-color .2s
  @extend .-no-border
  &:active
    background-color darken(@background-color, 12%)
  &:disabled
    background-color $grey-lighter !important
    opacity .8 !important

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