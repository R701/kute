<template>
  <transition-group tag="ul" class="list" :style="outerStyle">
    <li class="list-item" v-for="(item, index) in initialArr" :key="index" :style="itemStyle(index)">
      <p>{{item}}</p>
      <slot :item="item" :index="index"></slot>
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
        initialArr: [],
        arr: [],
        mySortable: null
      }
    },

    computed: {
      outerStyle () {
        var obj = {}
        obj.listStyle = this.listStyle
        if (this.cols > 1) {
          obj.display = 'flex'
          obj.flexWrap = this.wrap ? 'wrap' : 'nowrap'
        }
        return obj
      }
    },

    watch: {
      arr (val) {
        console.log('watch', val)
        this.$emit('update:data', val)
      },

      data (val) {
        console.log('watch 2', val)
        this.arr = val
      },

      sortable (val) {
        if (val) {
          this.createSortable()
        } else {
          this.destroySortable()
        }
      }
    },

    mounted () {
      this.containerWidth = this.$el.clientWidth

      this.arr = this.data.slice(0)
      this.initialArr = this.data.slice(0)

      if (this.sortable) {
        this.createSortable()
      }
    },

    methods: {
      itemStyle (index) {
        var obj = {}
        var isInLastRow =
          this.data.length - (index + 1) < this.data.length % this.cols

        if (this.cols > 1) {
          var gapCount = this.wrap ? this.cols - 1 : this.data.length - 1
          var gapWidth = this.xgap || 0
          obj.width =
            (this.containerWidth - gapCount * gapWidth) /
              (this.wrap ? this.cols : this.data.length) +
            'px'
        }

        if (this.ygap && !isInLastRow && this.wrap) {
          obj.marginBottom = u.getCSSLength(this.ygap)
        }

        if (this.xgap && this.cols > 1) {
          if (
            (this.wrap && (index + 1) % this.cols !== 0) ||
            (!this.wrap && index !== this.data.length - 1)
          ) {
            obj.marginRight = u.getCSSLength(this.xgap)
          }
        }

        return obj
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
            this.$emit('drag-move', evt, originalEven)
          }
          options.onEnd = evt => {
            this.$emit('drag-end', evt)
          }
          options.onFilter = evt => {
            this.$emit('filtered-drag', evt)
          }
          options.onUpdate = evt => {
            this.$emit('update', evt) // within list
            var { newIndex } = evt
            console.log('new index', newIndex)

            console.log(1, this.arr)
            this.arr.splice(newIndex, 0, 'jkljkl')
            console.log(2, this.arr)
          }
          options.onAdd = evt => {
            this.$emit('add', evt) // from another
          }
          options.onRemove = evt => {
            this.$emit('remove', evt) // to another
          }
          options.onSort = evt => {
            this.$emit('sort', evt) // add, update, remove
            // if (from === to) {
            // }
          }
          options.onClone = evt => {
            this.$emit('clone', evt)
          }
          options.setData = function () {}

          this.mySortable = Sortable.create(this.$el, options)
        })
      },

      destroySortable () {
        if (this.mySortable && this.mySortable.destroy) {
          this.mySortable.destroy()
          this.mySortable = null
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .draggable-container
    width 100%

    > span
      width 100%
</style>

