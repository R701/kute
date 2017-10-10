<template lang="html">
  <div class="tabs-nav">
    <div class="tabs-nav-activebar" ref="activeScrollBar" :style="{'transform':`translateX(${currentPosiOfBar}px)`,'width':`${barWidth}px`}"></div>
    <div ref="nav">
        <span v-for="item in panes"  @click="$emit('update:activeKey',item.tabKey)" class="tabs-nav-item" :class="{'-active':activeKey===item.tabKey, '-disabled':item.disabled}">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panes: Array,
    activeKey: null
  },
  created () {
    console.log(this.panes)
  },
  mounted () {

  },

  methods: {
    scrollToActive () {
      const {nav, activeScrollBar} = this.$refs
      const activeTab = nav.querySelector('.-active')
      const activeTabClientReact = activeTab.getBoundingClientRect()
      const scrollBarClientReact = activeScrollBar.getBoundingClientRect()
      const currentPosiOfBar = this.currentPosiOfBar
      this.currentPosiOfBar = currentPosiOfBar - (scrollBarClientReact.left - activeTabClientReact.left)
      this.barWidth = activeTabClientReact.width
      console.log(this.currentPosiOfBar, this.barWidth)
    }
  },
  watch: {
    activeKey (newTabKey) {
      this.$nextTick(this.scrollToActive)
    }
  },
  data () {
    return {
      currentPosiOfBar: 0,
      barWidth: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  &-nav
    border-bottom:2px solid #999
    position:relative
    &-activebar
      position:absolute
      bottom:-2px;
      height:2px;
      width:20px;
      background-color:$theme-primary-lighter
      z-index:1
      transition:transform .3s $ease-in-out-circ
    &-item
      display:inline-block
      padding:0 20px
      height:40px;
      line-height:40px;
      cursor:pointer
      user-select:none
      &:hover,&.-active
        color:$theme-primary-lighter
      &.-disabled
        cursor:not-allowed
        pointer-events:none
        color:#666
</style>
