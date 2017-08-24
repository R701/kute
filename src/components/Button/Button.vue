<template>
  <component :is="root"
             :to="href"
             :href="href"
             :disabled="disabled"
             :class="['button', `${state}-btn`, size, { 'link-btn': routerLink || link, 'no-outline': !outline,  'btn-block': block,  'no-text': emptySlot } ]"
             @click="onClick"
             @focus="onFocus"
             @blur="onBlur">
    <i class="btn-spinner"
       v-if="loading">
    </i>
    <i :class="[`${iconClassPrefix}${icon}`, { 'btn--faded': loading } ]"
       v-if="icon"></i>
    <span :class="[ 'btn-text', size, { 'btn--faded': loading } ]">
      <slot></slot>
    </span>
  </component>
</template>

<script>
  // import props from './_props'
  import props from '~components/Button/_props'
  import events from './_events'

  export default {
    props: props,

    inheritAttrs: false,

    computed: {
      root () {
        if (this.routerLink) {
          return 'nuxt-link'
        } else if (this.link) {
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
.button
  display inline-block
  display inline-flex
  align-items center
  justify-content center
  text-transform uppercase
  line-height 1
  box-sizing border-box
  position relative
  user-select none
  color $theme-primary
  font-family $helvetica-neue

@keyframes spinning
  0%
    transform rotate(0)
  50%
    transform rotate(180deg)
  100%
    transform rotate(360deg)

</style>
