<template lang="html">
  <div class="breadcrumb">
    <slot>
    </slot>
    <template>
      <breadcrumb-item v-for='matchedRoute in matchedRoutes' :key='matchedRoute.path' :path='matchedRoute.path'>
        {{matchedRoute.name}}
      </breadcrumb-item>
    </template>
  </div>
</template>

<script>
import BreadcrumbItem from './Breadcrumb.item'
export default {
  components: {
    'breadcrumb-item': BreadcrumbItem
  },
  data () {
    return {
      matchedRoutes: null
    }
  },
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  created () {
    if (!this.$slots.default) {
      const match = this.$route.matched.map(i => ({name: i.meta.name || i.name || i.path.split('/').reverse()[0], path: i.path}))
      this.matchedRoutes = match
    }
  }
}
</script>

<style lang="stylus" scoped>
.breadcrumb
   &-item
      >>>  &:last-child &-sep
              display:none
</style>
