<template>
  <div class="tabs-nav">
    <div ref="nav">
      <span :class="['tabs-nav-item', {'-active':activeKey===item.tabKey, '-disabled':item.disabled}]"
        v-for="(item, i) in panes"
        :key="i"
        @click="onNavClick(item.tabKey)"
        :style="{'width':width, 'margin-right':gap}">
        {{item.label}}
      </span>
    </div>
    <div class="tabs-nav-activebar"
      ref="activeScrollBar"
      :style="{'transform':`translateX(${currentPosiOfBar}px)`,'width':`${barWidth}px`}"></div>
  </div>
</template>

<script>
  import { nav as props } from './_props'
  export default {
    props,

    data () {
      return {
        currentPosiOfBar: 0,
        barWidth: 0
      }
    },

    mounted () {
      this.scrollToActive()
    },

    watch: {
      activeKey (newTabKey) {
        this.$nextTick(this.scrollToActive)
      }
    },

    methods: {
      scrollToActive () {
        const { nav, activeScrollBar } = this.$refs
        const activeTab = nav.querySelector('.-active')
        if (activeTab) {
          const activeTabClientRect = activeTab.getBoundingClientRect()
          const scrollBarClientReact = activeScrollBar.getBoundingClientRect()
          const currentPosiOfBar = this.currentPosiOfBar
          this.currentPosiOfBar = currentPosiOfBar - (scrollBarClientReact.left - activeTabClientRect.left)
          this.barWidth = activeTabClientRect.width
        }
      },

      onNavClick (key) {
        this.$emit('active-change', key)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabs
    &-nav
      border-bottom 1px solid #737780
      position relative

      &-activebar
        position absolute
        bottom -1px
        height 1px
        background-color $theme-primary-lighter
        z-index 1
        transition transform 0.3s $ease-in-out-circ

      &-item
        display inline-block
        padding 0 20px
        height 40px
        line-height 40px
        cursor pointer
        user-select none
        text-align center

        &.-disabled
          cursor not-allowed
          pointer-events none
          color #666

    &.-default
      & ^[0]-nav
        &-item
          &:hover, &.-active
            color $theme-primary-lighter

    &.-tab
      & ^[0]-nav
        &-activebar
          background-color $theme-secondary-lighter

        &-item
          border-radius 2px

          &:hover, &.-active
            color $theme-primary-lighter

          &.-active
            background $black-darker
</style>
