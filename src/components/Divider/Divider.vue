<template>
  <div :class="['divider-container', {'-vertical': vertical}]"
       :style="{margin: marginValue}">
    <div :class="['divider-line', {'-full': full}, {'-show': show}, {'-faded': hideLine}]"
         ref="indicator">
      <span class="divider-text"
            v-if="text && !vertical"
            ref="text">{{text}}</span>
    </div>
  </div>
</template>

<script>
  import u from '~utils'
  import props from './_props'
  export default {
    props,
    data () {
      return {
        show: false
      }
    },
    inheritAttrs: false,
    computed: {
      marginValue () {
        var cssLength = u.getCSSLength(this.margin, (val) => {
          if (this.full && !this.vertical) {
            return val * 2
          }
          return val
        })
        if (this.vertical) {
          return `0 ${cssLength}`
        } else {
          return `${cssLength} 0`
        }
      }
    },

    mounted () {
      this.init()
    },

    updated () {
      this.init()
    },

    methods: {
      init () {
        var parentNode = this.$el.parentNode
        if (!getComputedStyle || !parentNode) return
        var parentStyles = getComputedStyle(parentNode)
        if (parentStyles.position === 'static' && this.full && this.directParent) {
          parentNode.style.position = 'relative'
        }

        var offset = u.getCSSLength(this.margin)
        var indicator = this.$refs.indicator
        indicator.style[this.vertical ? 'border-left-width' : 'border-top-width'] = this.lineWidth + 'px'
        indicator.style[this.vertical ? 'border-left-style' : 'border-top-style'] = this.lineStyle
        if (this.full) {
          if (this.vertical) {
            indicator.style.marginLeft = `-${this.lineWidth / 2}px`
          } else {
            indicator.style.marginTop = `calc(${'-' + offset} - ${this.lineWidth / 2}px)`
          }
        }
        var text = this.$refs.text
        if (text) {
          if (this.lineWidth > 1) {
            text.style.marginTop = `calc(-.5em - ${this.lineWidth / 2}px)`
          }
          if (this.textBg) {
            text.style.backgroundColor = u.getCSSColor(this.textBg)
          }
        }
        if (this.vertical) {
          var parentHeight
          if (this.full) {
            parentHeight = u.getPxValue(parentStyles.height) - u.getPxValue(parentStyles.borderTopWidth) - u.getPxValue(parentStyles.borderBottomWidth)
          } else {
            parentHeight = u.getPxValue(parentStyles.height) - u.getPxValue(parentStyles.paddingTop) - u.getPxValue(parentStyles.paddingBottom) - u.getPxValue(parentStyles.borderTopWidth) - u.getPxValue(parentStyles.borderBottomWidth)
          }
          indicator.style.height = parentHeight + 'px'
        }
        if (this.color) {
          indicator.style.borderColor = u.getCSSColor(this.color)
        }

        this.show = true
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .divider-container
    display block
    width 100%

    .divider-line
      position relative
      display block
      width 100%
      left 0
      border-radius 0
      position relative
      border 0
      transition opacity 0.2s
      opacity 0

      &.-full
        position absolute

      &.-show
        opacity 1

    .divider-text
      position absolute
      left 50%
      transform translateX(-50%)
      line-height 1
      margin-top -0.5em
      padding 0 0.4em
      background $black

  .-vertical
    width auto

    .divider-line
      width auto
      left auto
      top 0
</style>

