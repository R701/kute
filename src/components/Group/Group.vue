<script>
  import props from './_props'

  export default {
    props: props,

    render (h) {
      const slotL = this.$slots.default.length
      this.$slots.default.forEach((child, i) => {
        let cls = child.data.staticClass || ''
        let sty = child.data.staticStyle || {}
        let attrs = child.data.attrs || {}
        if (!this.vertical) {
          if (i < slotL - 1) {
            sty.marginRight = '1px'
          }
          if (i === 0) {
            cls += ' -sharp-corner-2 -sharp-corner-3'
            attrs['sharp-corner-2'] = ''
            attrs['sharp-corner-3'] = ''
          } else if (i === slotL - 1) {
            cls += ' -sharp-corner-1 -sharp-corner-4'
            attrs['sharp-corner-1'] = ''
            attrs['sharp-corner-4'] = ''
          } else {
            cls += ' -sharp-corner-1 -sharp-corner-2 -sharp-corner-3 -sharp-corner-4'
            attrs['sharp-corner-1'] = ''
            attrs['sharp-corner-2'] = ''
            attrs['sharp-corner-3'] = ''
            attrs['sharp-corner-4'] = ''
          }
        } else {
          if (i < slotL - 1) {
            sty.marginBottom = '1px'
          }
          if (i === 0) {
            cls += ' -sharp-corner-3 -sharp-corner-4'
            attrs['sharp-corner-3'] = ''
            attrs['sharp-corner-4'] = ''
          } else if (i === slotL - 1) {
            cls += ' -sharp-corner-1 -sharp-corner-2'
            attrs['sharp-corner-1'] = ''
            attrs['sharp-corner-2'] = ''
          } else {
            cls += ' -sharp-corner-1 -sharp-corner-2 -sharp-corner-3 -sharp-corner-4'
            attrs['sharp-corner-1'] = ''
            attrs['sharp-corner-2'] = ''
            attrs['sharp-corner-3'] = ''
            attrs['sharp-corner-4'] = ''
          }
        }
        child.data.staticClass = cls
        child.data.staticStyle = sty
        child.data.attrs = attrs
      })
      return h('div', {
        class: {
          group: true,
          vertical: this.vertical
        }
      }, this.$slots.default)
    }
  }
</script>

<style lang="stylus" scoped>
.group
  display flex
  align-items stretch
  &.vertical
    flex-direction column
</style>
