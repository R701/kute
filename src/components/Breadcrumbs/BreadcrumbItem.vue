<template>
  <component :is="tag"
    :to="fullHref"
    :href="fullHref"
    :target="blank ? '_blank' : '_self'"
    :event="preventDefault || disabled ? '' : 'click'"
    @click.stop="onClick"
    @click.native.stop="onClick"
    :class="['breadcrumb-item', { '-active': active, '-disabled': disabled, '-icon-only': iconOnly }]">
    <i :class="['breadcrumb-item-icon', 'prepend', `${config$.iconClassPrefix}${icon}`]"
      v-if="icon && iconPosition == 'prepend'" />
    <slot v-if="!text"></slot>
    <span v-else>{{text}}</span>
    <i :class="['breadcrumb-item-icon', 'append', `${config$.iconClassPrefix}${icon}`]"
      v-if="icon && iconPosition == 'append'" />
  </component>
</template>


<script>
  import withIcon from '~mixins/with-icon'
  import linkable from '~mixins/linkable'
  import { item as props } from './_props'
  export default {
    mixins: [withIcon, linkable],
    props,
    computed: {
      tag () {
        if (this.active) return 'span'
        return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a'
      },

      iconOnly () {
        return !this.text && !this.$slots.default && this.icon
      }
    },
    methods: {
      onClick (evt) {
        if (this.preventDefault || this.disabled) {
          evt.preventDefault()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.breadcrumb-item
  vertical-align middle
  color $white-darker
  transition color .2s
  &:hover
    color $state-info
  &-icon
    &.prepend
      margin-right 3px
    &.append
      margin-left 3px

  &.-icon-only
    .breadcrumb-item-icon
      margin-right 0 !important 
      margin-left 0 !important
  &.-active
    color $white-lighter !important
    &:hover
      color $white-lighter !important
</style>

