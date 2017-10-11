<template lang="html">
  <div class="tabs">
      <tab-nav :panes='panes' :activeKey.sync='currentKey'></tab-nav>
      <div class="tabs-content">
        <slot/>
      </div>
  </div>
</template>

<script>
import tabNav from './TabNav'
export default {
  components: {
    tabNav
  },
  computed: {
    panes () {
      console.log('com')
      return this.$slots.default.map(i => i.componentOptions.propsData) || []
    }
  },
  data () {
    return {currentKey: 1}
  },
  updated () {
    console.log('updated')
  }
}
</script>

<style lang="stylus" scoped>

</style>
