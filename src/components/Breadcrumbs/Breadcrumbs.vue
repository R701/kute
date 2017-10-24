<template>
  <div class="breadcrumbs">
    <template v-for="(item, index) in realArr">
      <breadcrumb-item :active="index === realArr.length - 1"
        :key="index"
        v-bind="itemProps(item)"></breadcrumb-item>
      <span :class="['breadcrumb-sep', {'-default': !separator && !$scopedSlots.sep, '-active': index === realArr.length - 2}]"
        v-if="index < realArr.length - 1"
        :key="index">
        <slot name="sep"
          v-if="$scopedSlots.sep"></slot>
        <template v-else>{{ separator }}</template>
      </span>
    </template>
  </div>
</template>


<script>
  import BreadcrumbItem from './BreadcrumbItem'
  import { main as props } from './_props'
  import u from '~utils'
  export default {
    inheritAttrs: false,
    components: { BreadcrumbItem },
    props,

    computed: {
      realArr () {
        return this.data || this.parsedRoutes
      },

      parsedRoutes () {
        if (!this.$route) return []
        var arr = this.$route.matched.map(i => ({
          text: i.meta.name || i.name || i.path.split('/').reverse()[0],
          href: i.path,
          router: true
        })).slice(0)
        var index = {
          text: this.root,
          href: '/',
          router: true
        }
        if (typeof this.root === 'object' && this.root !== null) {
          index = u.assign({}, index, this.root)
        }
        arr.unshift(index)
        return arr
      }
    },

    mounted () {
      if (this.debug) {
        console.log(this.$scopedSlots)
      }
    },

    methods: {
      itemProps (item) {
        return u.assign({}, this.$attrs, item)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.breadcrumb-sep
  padding 0 10px
  color $grey-lighter
  &.-default
    &:before
      content ' '
      border 2px solid $grey-lighter
      display inline-block
      vertical-align middle
      width 0.4em
      height 0.4em
      background-color transparent
      position relative
      left -0.1em
      // top 0.7em
      transform rotate(-45deg)
      border-top 0
      border-left 0
  &.-active
    // color $theme-secondary !important
    &:before
      border-color $theme-secondary !important
</style>
