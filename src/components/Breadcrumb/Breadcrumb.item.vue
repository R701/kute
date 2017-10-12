<template lang="html">
  <span class="breadcrumb-item" @click='onItemClick'><span>
  <i :class="['breadcrumb-item-icon', 'prepend', `${config$.iconClassPrefix}${icon}`]"
  v-if="icon && iconPosition == 'prepend'"/>
  <slot></slot>
  <i :class="['breadcrumb-item-icon', 'append', `${config$.iconClassPrefix}${icon}`]"
  v-if="icon && iconPosition == 'append'"/>
  </span>
  <span class="breadcrumb-item-sep">{{separator}}</span></span>
</template>

<script>
  import u from '~utils'
  import {
    breadcrumbItemProps as props
  } from './_props'
  import withIcon from '~mixins/with-icon'
  export default {
    mixins: [withIcon],
    props,
    data () {
      return {
        separator: this.$parent.separator
      }
    },
    methods: {
      onItemClick () {
        if (!this.path) {
          u.noop()
          return
        }
        if (this.$router) {
          this.$router.push(this.path)
        }
      }
    }

  }
</script>

<style lang="stylus" scoped>
.breadcrumb
  &-item
    cursor: pointer
    vertical-align:middle
    font-size:16px
    color:$grey-lighter
    text-transform:capitalize;
</style>
