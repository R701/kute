<template>
  <transition-group :name="sortable || swapMode ? transitionName : null"
    tag="ul"
    class="list"
    :style="outerStyle"
    :data-row-count="rowCount"
    :data-col-count="cols">
    <li :class="['list-item', {'-dragged': index === draggedIndex}]"
      v-for="(item, index) in arr"
      :data-row-index="rowIndex(index)"
      :data-col-index="colIndex(index)"
      :key="itemKey ? item[itemKey] : item"
      :style="itemStyle(index)">
      <slot :item="item"
        :index="index"></slot>
    </li>
  </transition-group>
</template>

<script>
  import props from './_props'
  import u from '~utils'
  import Sortable from 'sortablejs'

  export default {
    props,
    model: {
      prop: 'data',
      event: 'update:data'
    },

    inheritAttrs: false,

    data () {
      return {
        containerWidth: 0,
        arr: [],
        mySortable: null,
        draggedIndex: null,
        dragEnteredIndex: null,
        ghost: null,
        dragCoord: null,
        equal: false,
        swapMode: false
      }
    },

    computed: {
      outerStyle () {
        var obj = {}
        obj.listStyle = this.listStyle
        if (this.cols > 1) {
          if (this.flex) {
            obj.display = 'flex'
            obj.flexWrap = this.wrap ? 'wrap' : 'nowrap'
          }
          obj.whiteSpace = this.wrap ? 'normal' : 'nowrap'
        }
        if (this.reverse) {
          if (this.flex) {
            obj.flexDirection = 'row-reverse'
          } else {
            obj.direction = 'rtl'
          }
        }
        return obj
      },

      rowCount () {
        return Math.ceil(this.arr.length / this.cols)
      },

      autoWidth () {
        var gapCount = this.wrap ? this.cols - 1 : this.data.length - 1
        var gapWidth = this.xgap || 0
        if (this.equal) {
          gapCount++
        }
        return (
          (this.containerWidth - gapCount * gapWidth) /
          (this.wrap ? this.cols : this.data.length)
        )
      },

      maxIndex () {
        return this.arr.length - 1
      }
    },

    watch: {
      arr (val) {
        this.$emit('update:data', val)
      },

      data (val) {
        this.arr = val
      },

      sortable (val) {
        if (val) {
          this.createSortable()
        } else {
          this.destroySortable()
        }
      },

      balanced (val) {
        this.equal = !!val
      }
    },

    mounted () {
      this.containerWidth = this.$el.clientWidth

      this.arr = this.data.slice(0)
      this.equal = !!this.balanced

      if (this.sortable) {
        this.createSortable()
      }
    },

    beforeDestroy () {
      this.destroySortable()
    },

    methods: {
      itemStyle (index) {
        var obj = {}
        var isInLastRow = this.rowIndex(index) + 1 === this.rowCount

        if (!this.flex) {
          obj.display = 'inline-block'
          obj.verticalAlign = 'middle'
          if (this.listStyle && this.listStyle !== 'none') {
            obj.display = 'list-item'
            obj.float = this.reverse ? 'right' : 'left'
          }
        }

        if (this.cols > 1) {
          obj.width = this.autoWidth + 'px'
        } else {
          obj.width = this.containerWidth + 'px'
        }

        if (this.ygap && (!isInLastRow || this.equal) && this.wrap) {
          obj.marginBottom = u.getCSSLength(this.ygap)
        }

        if (this.xgap && this.cols > 1) {
          if (
            (this.wrap && this.colIndex(index) + 1 !== this.cols) ||
            (!this.wrap && index !== this.maxIndex) || this.equal
          ) {
            obj[this.reverse ? 'marginLeft' : 'marginRight'] = u.getCSSLength(
              this.xgap / 2
            )
          }

          if (
            (this.wrap && this.colIndex(index) !== 0) ||
            (!this.wrap && index !== 0) || this.equal
          ) {
            obj[this.reverse ? 'marginRight' : 'marginLeft'] = u.getCSSLength(
              this.xgap / 2
            )
          }
        }

        return obj
      },

      rowIndex (index) {
        return Math.floor(index / this.cols)
      },

      colIndex (index) {
        return index % this.cols
      },

      forceUpdate () {
        this.containerWidth = this.$el.clientWidth
      },

      createSortable () {
        this.$nextTick(() => {
          this.destroySortable()
          var options = this.$attrs || {}
          options.scrollFn = (offsetX, offsetY, originalEven) => {
            this.$emit('sort-scroll', offsetX, offsetY, originalEven)
          }
          options.onChoose = evt => {
            this.$emit('drag-choose', evt)
          }
          options.onStart = evt => {
            this.$emit('drag-start', evt)
          }
          options.onMove = (evt, originalEven) => {
            this.equal = true
            this.$emit('drag-move', evt, originalEven)
          }
          options.onEnd = evt => {
            this.equal = !!this.balanced
            this.$emit('drag-end', evt)
          }
          options.onFilter = evt => {
            this.$emit('filtered-drag', evt)
          }
          options.onUpdate = evt => {
            var { newIndex, oldIndex } = evt
            this.arr.splice(newIndex, 0, this.arr.splice(oldIndex, 1)[0])
            this.$emit('update', evt) // within list
          }
          // options.onAdd = evt => {
          //   this.$emit('add', evt) // from another
          // }
          // options.onRemove = evt => {
          //   this.$emit('remove', evt) // to another
          // }
          // options.onSort = evt => {
          //   this.$emit('sort', evt) // add, update, remove
          // }
          // options.onClone = evt => {
          //   this.$emit('clone', evt)
          // }

          this.mySortable = Sortable.create(this.$el, options)
        })
      },

      destroySortable () {
        if (this.mySortable && this.mySortable.destroy) {
          this.mySortable.destroy()
          this.mySortable = null
        }
      },

      swap (i1, i2) {
        var _this = this
        function validNumber (n) {
          n = +n
          return typeof n === 'number' && n >= 0 && n <= _this.maxIndex
        }
        if (i1 === i2 || !validNumber(i1) || !validNumber(i2)) return
        this.swapMode = true
        var item1 = this.arr[i1]
        this.arr.splice(i1, 1, this.arr.splice(i2, 1, item1)[0])
        setTimeout(() => {
          this.swapMode = false
        }, 500)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  ul
    clearfix()
  .sortable-ghost
    opacity .6
  .cell-move
    transition: transform .5s
</style>

