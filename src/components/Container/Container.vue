<template>
  <div :class="['container', computedClassNames]"
       :style="boxStyle"
       @scroll="onScroll"
       ref="container">
    <slot></slot>
  </div>
</template>

<script>
  import props from './_props'
  import u from '~utils'

  export default {
    props,

    data () {
      return {
        lastScroll: {}
      }
    },

    computed: {
      computedClassNames () {
        return {
          '-flex': this.flex && !this.inline,
          '-inline-flex': this.flex && this.inline,
          '-inline': !this.flex && this.inline,
          '-flex-wrap': this.flex && this.wrap,
          '-flex-column': this.column,
          '-relative': this.relative,
          '-scroll': this.scroll,
          '-scroll-x': this.scrollX && !this.scrollY,
          '-scroll-y': this.scrollY && !this.scrollX
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
          obj.marginTop = u.getCSSLength(this.mv)
          obj.marginBottom = u.getCSSLength(this.mv)
        }
        if (this.ml) {
          obj.marginLeft = u.getCSSLength(this.ml)
        }
        if (this.mr) {
          obj.marginRight = u.getCSSLength(this.mr)
        }
        if (this.mt) {
          obj.marginTop = u.getCSSLength(this.mt)
        }
        if (this.mb) {
          obj.marginBottom = u.getCSSLength(this.mb)
        }
        if (this.bg) {
          obj.backgroundColor = u.getCSSColor(this.bg)
        }

        if (this.overflow) {
          obj.overflow = 'visible'
        } else {
          obj.overflow = 'hidden'
        }

        return obj
      }
    },

    created () {
      if (this.scrollX && this.scrollY) {
        throw new Error('"scrollX" and "scrollY" should not be set at the same time.')
      }
    },

    mounted () {
      if (this.scrollY && this.scrollTop > 0) {
        this.$refs.container.scrollTop = this.scrollTop
      }

      if (this.scrollX && this.scrollLeft > 0) {
        this.$refs.container.scrollLeft = this.scrollLeft
      }

      if (this.scrollIntoView && this.$refs.container.querySelector(this.scrollIntoView)) {
        this.$nextTick(() => {
          this.$refs.container.querySelector(this.scrollIntoView).scrollIntoView({
            behavior: 'smooth'
          })
        })
      }
    },

    methods: {
      onScroll ({ target }) {
        if (!this.scrollX && !this.scrollY) return
        var { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = target
        var lastScrollLeft = (this.lastScroll ? this.lastScroll.scrollLeft : null) || this.scrollLeft || 0
        var lastScrollTop = (this.lastScroll ? this.lastScroll.scrollTop : null) || this.scrollTop || 0
        var deltaLeft = scrollLeft - lastScrollLeft
        var deltaTop = scrollTop - lastScrollTop
        var detail = { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight, deltaLeft, deltaTop }
        this.$emit('scroll', detail)
        if ((deltaTop > 0 && scrollTop >= scrollHeight - clientHeight - this.lowerThreshold) || (deltaLeft > 0 && scrollLeft >= scrollWidth - clientWidth - this.lowerThreshold)) {
          this.$emit('scroll-to-lower', detail)
        }

        if ((deltaTop < 0 && scrollTop <= this.upperThreshold) || (deltaLeft < 0 && scrollLeft <= this.upperThreshold)) {
          this.$emit('scroll-to-upper', detail)
        }

        this.lastScroll = { scrollLeft, scrollTop }
      }
    }
  }
</script>

<style lang="stylus">
  @require '~object/layout'

  .container
    @extend .kute-box
</style>
