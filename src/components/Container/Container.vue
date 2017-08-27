<template>
  <div :class="['container', computedClassNames]"
       :style="boxStyle">
    <slot></slot>
  </div>
</template>

<script>
  import props from './_props'
  import u from '~utils'

  export default {
    props,
    computed: {
      computedClassNames () {
        return {
          '-flex': this.flex && !this.inline,
          '-inline-flex': this.flex && this.inline,
          '-inline': !this.flex && this.inline,
          '-flex-wrap': this.flex && this.wrap,
          '-flex-column': this.column
        }
      },

      inColumnParent () {
        return this.$parent.column && this.$parent.flex
      },

      boxStyle () {
        var obj = {}
        if (this.w) {
          obj.width = u.getCSSLength(this.w)
          if (!this.inColumnParent) {
            obj.flexBasis = u.getCSSLength(this.w)
            obj.flexGrow = 0
          }
        }
        if (this.h) {
          obj.height = u.getCSSLength(this.h)
          if (this.inColumnParent) {
            obj.flexBasis = u.getCSSLength(this.h)
            obj.flexGrow = 0
          }
        }

        if (this.pa) {
          obj.padding = u.getCSSLength(this.pa)
        }
        if (this.ph) {
          obj.paddingLeft = u.getCSSLength(this.ph)
          obj.paddingRight = u.getCSSLength(this.ph)
        }
        if (this.pv) {
          obj.paddingTop = u.getCSSLength(this.pv)
          obj.paddingBottom = u.getCSSLength(this.pv)
        }
        if (this.pl) {
          obj.paddingLeft = u.getCSSLength(this.pl)
        }
        if (this.pr) {
          obj.paddingRight = u.getCSSLength(this.pr)
        }
        if (this.pt) {
          obj.paddingTop = u.getCSSLength(this.pt)
        }
        if (this.pb) {
          obj.paddingBottom = u.getCSSLength(this.pb)
        }

        if (this.ma) {
          obj.margin = u.getCSSLength(this.ma)
        }
        if (this.mh) {
          obj.marginLeft = u.getCSSLength(this.mh)
          obj.marginRight = u.getCSSLength(this.mh)
        }
        if (this.mv) {
          obj.marginTom = u.getCSSLength(this.mv)
          obj.marginBottom = u.getCSSLength(this.mv)
        }
        if (this.ml) {
          obj.marginLeft = u.getCSSLength(this.ml)
        }
        if (this.mr) {
          obj.marginRight = u.getCSSLength(this.mr)
        }
        if (this.mt) {
          obj.marginTom = u.getCSSLength(this.mt)
        }
        if (this.mb) {
          obj.marginBottom = u.getCSSLength(this.mb)
        }

        return obj
      }
    }
  }
</script>

<style lang="stylus">
@require '~object/layout'

.container
  @extend .kute-box
</style>
