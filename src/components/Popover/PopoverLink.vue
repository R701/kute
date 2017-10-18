<template>
  <component :class="['popover-link', {'-disabled': disabled}]"
             :is="tag"
             :to="fullHref"
             :href="fullHref"
             :target="blank ? '_blank' : '_self'"
             :event="preventDefault || disabled ? '' : 'click'"
             @click="onClick"
             @click.native="onClick">
    <i v-if="icon"
       :class="`popover-link-icon ${config$.iconClassPrefix}${icon}`"></i>
    <span>{{text}}</span>
  </component>
</template>

<script>
  import linkable from '~mixins/linkable'
  import withIcon from '~mixins/with-icon'
  import { link as props } from './_props'
  export default {
    props,
    mixins: [linkable, withIcon],
    computed: {
      tag () {
        if (this.blank) {
          return 'a'
        } else if (this.nuxt) {
          return 'nuxt-link'
        } else if (this.router) {
          return 'router-link'
        } else {
          return 'a'
        }
      }
    },

    methods: {
      onClick (evt) {
        if (this.preventDefault || this.disabled) {
          evt.preventDefault()
        }
        if (!this.disabled) {
          this.$emit('click')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .popover-link
    display block
    line-height 3
    color $grey-darker
    padding 0 1em
    ellipsis()
    transition none

    &:hover
      background $theme-primary
      color $white

    &-icon
      vertical-align middle
      margin-right 0.5em
      display inline-block

    span
      vertical-align middle

  .-disabled
    color alpha($grey-darker, 50%) !important

    &:hover
      cursor not-allowed !important
      background transparent !important
</style>


