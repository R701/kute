<template>
  <div :class="['navigator', `-${size}`, {'-horizontal': horizontal, '-united': horizontal && united }]"
       ref="container"
       v-click-outside="onClickOutside">
    <template v-for="(item, index) in items">
      <k-divider v-if="item.divider && !horizontal"
                 :key="index"
                 v-bind="item"></k-divider>
      <navigator-item v-else
                      :key="index"
                      v-bind="itemProps(item)"
                      :index="index"
                      :level="level"
                      :active="activeIndex === index"
                      :show-children="isToggled(index)"
                      @item-click="onItemClick"
                      ref="item">
        <k-navigator v-show="isToggled(index)"
                     :items="item.children"
                     :level="level + 1"
                     :parent-index="index"
                     v-bind="inheritableProps"
                     v-on="$listeners"
                     ref="nested"
                     @select:inside="onNestedSelect">
        </k-navigator>
      </navigator-item>

    </template>
  </div>
</template>

<script>
  import { containerProps } from './_props'
  import size from '~mixins/size'
  import u from '~utils'

  import NavigatorItem from './NavigatorItem'

  export default {
    props: containerProps,

    model: {
      prop: 'value',
      event: 'update:value'
    },

    name: 'k-navigator',

    mixins: [size],

    inheritAttrs: false,

    components: { NavigatorItem },

    data () {
      return {
        innerValue: [],
        activeIndex: null,
        showChildrenIndex: null,
        toggledIndexes: []
      }
    },

    computed: {
      inheritableProps () {
        var omittedProps = u.omit(this.$props, 'items', 'level', 'horizontal', 'parentIndex')
        return u.assign({}, this.$attrs, omittedProps)
      },

      isNested () {
        return this.isNumber(this.parentIndex)
      }
    },

    watch: {
      horizontal: function () {
        this.initLayout()
      },

      horizontalItemWidth: function () {
        this.initLayout()
      },

      horizontalGap: function () {
        this.initLayout()
      },

      value (value) {
        if (Array.isArray(value)) {
          if (this.parentIndex !== value[this.level - 1] || !this.isNumber(value[this.level])) {
            this.deactivate()
            if (this.autoToggle) {
              this.toggledIndexes = []
              this.noChildrenShow()
            }
          }
        }
        this.setValue(value)
      },

      showChildrenIndex (newVal, oldVal) {
        if (this.isNumber(newVal)) {
          this.toggleDown(newVal)
        }
      }
    },

    mounted () {
      this.initLayout()
      this.setValue(this.value)
    },

    methods: {
      itemProps (item) {
        return u.assign({}, this.$attrs, item)
      },

      isNumber (n) {
        return typeof n === 'number' && !isNaN(n)
      },

      itemIsParent (index) {
        return this.$refs.item[index] && this.$refs.item[index].$children[0] && u.isWhichVM(this.$refs.item[index].$children[0], 'k-navigator')
      },

      deactivate () {
        this.activeIndex = null
      },

      noChildrenShow () {
        this.showChildrenIndex = null
      },

      isToggled (index) {
        return Array.isArray(this.toggledIndexes) && this.toggledIndexes.indexOf(index) >= 0
      },

      toggleDown (index) {
        if (this.isToggled(index)) return
        this.toggledIndexes.push(index)
      },

      toggleUp (index) {
        if (!this.isToggled(index)) return
        this.toggledIndexes.splice(this.toggledIndexes.indexOf(index), 1)
      },

      toggle (index) {
        if (this.isToggled(index)) {
          this.toggleUp(index)
        } else {
          this.toggleDown(index)
        }
      },

      setValue (value) {
        if (this.isNested || !Array.isArray(value)) return
        var nav = this
        for (var level = 0, len = value.length; level < len; level++) {
          var activeIndex = value[level]
          nav.activeIndex = activeIndex
          if (nav.itemIsParent(activeIndex)) {
            nav.showChildrenIndex = activeIndex
            nav = nav.$refs.item[activeIndex].$children[0]
          } else if (level !== len - 1) {
            console.error(`Invalid value [${value}]. Item ${activeIndex} on level ${level} does not have a nested nav.`)
          }
        }
      },

      getValue () {
        if (this.isNested) return
        var value = []
        var nav = this
        while (this.isNumber(nav.showChildrenIndex)) {
          value.push(nav.showChildrenIndex)
          nav = nav.$refs.item[nav.showChildrenIndex].$children[0]
        }
        value.push(nav.activeIndex)

        return value
      },

      initLayout () {
        if (this.horizontal) {
          var items = this.$refs.item
          var itemLen = items.length

          var w = this.horizontalItemWidth ? u.getCSSLength(this.horizontalItemWidth) : null

          items.forEach((item, i) => {
            if (i < itemLen - 1) {
              item.$el.style.marginRight = (this.horizontalGap || 10) + 'px'
            }
            item.$el.style.width = w
          })
        }
      },

      onClickOutside () {
        if (this.horizontal) {
          this.showChildrenIndex = null
          this.toggledIndexes = []
        }
      },

      onItemClick (index, isParent) {
        if (isParent) {
          if (this.autoToggle) {
            this.toggledIndexes = []
          }
          // if (this.itemIsParent(this.activeIndex)) {
          //   this.activeIndex = index
          // }
          if (this.showChildrenIndex === index) {
            // if (this.activeIndex === index) {
            //   this.deactivate()
            // }
            this.noChildrenShow()
            this.toggleUp(index)
          } else if (this.isToggled(index)) {
            this.toggleUp(index)
          } else {
            this.showChildrenIndex = index
          }
        } else {
          this.activeIndex = index
          if (this.autoToggle) {
            this.toggledIndexes = []
            this.noChildrenShow()
          }
          if (this.isNested) {
            this.$emit('select:inside', {
              level: this.level,
              index
            }, [this.parentIndex, index])
          } else {
            if (this.horizontal) {
              this.toggledIndexes = []
              this.noChildrenShow()
            }
            this.innerValue = [index]
            this.$emit('select', {
              level: this.level,
              index
            }, this.innerValue)
            this.$emit('update:value', this.innerValue)
          }
        }
      },

      onNestedSelect ({ level, index }, arr) {
        if (this.level !== level - 1) return
        console.log(level, arr)

        if (this.isNested) {
          arr.unshift(this.parentIndex)
          this.$emit('select:inside', {
            level: this.level,
            index
          }, arr)

          console.log(this.level, arr)
        } else {
          this.innerValue = arr
          this.$emit('select', {
            level: this.level,
            index
          }, this.innerValue)
          this.$emit('update:value', this.innerValue)
          console.log(this.level, this.innerValue)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.navigator
  position relative
 .navigator-item
    color white
    position relative
    line-height 2
    >>> a
      padding-left 1em
      color inherit
      vertical-align middle
      display inline-block
      width 100%
      height 100%
      transition all .2s
      cursor pointer
      i, span
        vertical-align middle
        display inline-block
      .navigator-item-icon
        margin-right 5px
        vertical-align middle
      .navigator-item-badge
        position relative
        display inline-block
        left .6em
        color white
        padding 2px 5px
        border-radius 15px
        background-color $theme-primary
        line-height 1
        font-size 12px
        transform scale(.9)
        vertical-align middle
    &:before
      content ' '
      display block
      width 3px
      height 1.2em
      border-radius 1.5px
      position absolute
      top .5em
      left 0
      background-color $grey
      transition all .2s
    &:hover
      &:before
        background-color $theme-secondary
    &.-toggled
      color white
      &:before
        content ' '
        top .6em
        transform rotate(45deg)
        border 3px solid $grey
        width .7em
        height .7em
        background-color transparent
        left -.3em
        border-top 0
        border-left 0
    &.-active
      color $theme-primary-lighter
      &:before
        content ' '
        border 3px solid $theme-secondary
        width .7em
        height .7em
        background-color transparent
        left -.3em
        top .7em
        transform rotate(-45deg)
        border-top 0
        border-left 0
      &.-parent
          &:before
            top .9em
            transform rotate(-135deg)
        &.-toggled
          &:before
            top .6em
            transform rotate(45deg)
    &.-disabled
      cursor not-allowed !important
      color $grey-lighter !important
      >>> *
        cursor not-allowed !important
    >>> .navigator
      padding-left 1em

.-horizontal
  display flex
  > .navigator-item
    padding 0
    line-height 2
    margin-right 10px
    transition all .2s
    border-radius 4px
    text-align center
    flex 1
    white-space nowrap
    &:last-child
      margin-right 0
    &:before
      width 100%
      height 2px
      bottom 0px
      top auto
      border 0
      cursor default
      font-size inherit
      margin-bottom -.44em
      z-index 2
    >>> a
      padding 0 .4em
      display inline-block
      ellipsis()
      width 100%
    >>> .navigator-item-badge
      left .2em
    &:hover
      background-color alpha($black-darker, .6)
      &:before
        background-color $grey
    &.-toggled
      background-color alpha($black-darker, .75)
    &.-active
      background-color alpha($black-darker, .75)
      &:before
        background-color $theme-secondary
        width 100%
        height 2px
        border none
        left 0
        top auto
        transform none
    &.-parent
      &:before
        transform rotate(0) !important
        top auto !important
    > .navigator
      position absolute
      z-index 4
      margin-top 10px
      box-shadow psShadow(#000, .5, 90, 8px, 0, 35px)
      border-radius 4px
      background-color $black-darker
      padding-top .3em
      padding-bottom .3em
      &:before
        content ''
        display block
        position absolute
        width 100%
        height 10px
        top -10px
    >>> .navigator
      padding-right .5em
      min-width 100%
      text-align left
      white-space nowrap
      .navigator-item
        a
          padding-left 1em
.-united
  &:after
    content ''
    display block
    position absolute
    bottom 0
    left 0
    border-bottom 2px solid $grey
    width 100%
    margin-bottom -.44em
</style>

