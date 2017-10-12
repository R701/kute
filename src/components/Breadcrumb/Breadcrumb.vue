<template lang="html">
  <div class="breadcrumb" :class='`-${type}`'>
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
import {breadcrumbProps as props} from './_props'
export default {
  components: {
    'breadcrumb-item': BreadcrumbItem
  },
  data () {
    return {
      matchedRoutes: null
    }
  },
  props,
  created () {
    if (!this.$slots.default && this.$route) {
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
    >>>  &:last-child
      color:$white
  &.-tab
    & .breadcrumb-item
      display:inline-block;
      background:$black-darker;
      box-shadow: psShadow(#000, 60%, 150, 1px, 1px, 8px,true)
      position:relative
      margin-right:-1px;
      height:30px;
      padding:0 10px;
      line-height:30px;
      font-size:14px;
      clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 100%, 5px 100%);
      color:$white
      >>> .breadcrumb-item-sep
        display:none
      &:first-child
        clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 100%, 0% 100%);
      &:last-child
        background:white;
        color:$black
        box-shadow:none;
</style>
