<template>
  <div class="popover-wrapper"
       v-click-outside="onClickOutside">
    <slot></slot>
    <div v-show="innerShow"
         :class="['popover', `-${position}`]"
         :style="{width: realWidth}">
      <slot v-if="!links"
            name="content"></slot>
      <template v-else
                v-for="(link, index) in links">
        <k-divider margin="4"
                   color="$white-darker"
                   v-if="link.divider"
                   :key="index"></k-divider>
        <p-link v-else
                v-bind="linkItemProp(link)"
                :key="index"
                @click="onLinkClick(index)"></p-link>
      </template>
    </div>
  </div>
</template>

<script>
  import { main as props } from './_props'
  import u from '~utils'
  import PLink from './PopoverLink'
  import KDivider from './../Divider/Divider'
  import assign from 'object-assign'
  export default {
    props,
    data () {
      return {
        innerShow: false
      }
    },
    components: {
      PLink,
      KDivider
    },

    watch: {
      show (val) {
        this.innerShow = val
      },
      innerShow (val) {
        this.$emit('update:show', val)
      }
    },
    inheritAttrs: false,
    computed: {
      realWidth () {
        return u.getCSSLength(this.width)
      }
    },

    mounted () {
      this.innerShow = this.show
    },

    methods: {
      linkItemProp (item) {
        return assign({}, this.$attrs || {}, item)
      },

      onClickOutside () {
        if (!this.fixed) {
          this.innerShow = false
        }
      },

      onLinkClick (index) {
        this.$emit('select', this.links[index], index)
        if (!this.fixed) {
          this.innerShow = false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $shadow-color = #000
  $bg = $white
  $border-radius = 4px
  $shadow-down = 0 1px 5px alpha($shadow-color, 0.5), 0 2px 2px alpha($shadow-color, 0.34)
  $shadow-up = 0 -1px 5px alpha($shadow-color, 0.5), 0 -2px 2px alpha($shadow-color, 0.34)
  $shadow-left = -1px 0 5px alpha($shadow-color, 0.5), -2px 0 2px alpha($shadow-color, 0.34)
  $shadow-right = 1px 0 5px alpha($shadow-color, 0.5), 2px 0 2px alpha($shadow-color, 0.34)

  .popover-wrapper
    position relative
    display inline-block

    .popover
      padding $border-radius 0
      background-color $bg
      z-index 100
      position absolute
      border-radius $border-radius
      color $grey-darker

      // border 1px solid $grey-darker
      &:before
        content ''
        position absolute
        width 0
        height 0
        border 8px solid transparent

      &.-s
        absCenterX()
        top 100%
        margin-top 10px
        box-shadow $shadow-down

        &:before
          top -16px
          left 50%
          margin-left -8px
          border-bottom-color $bg

      &.-sw
        right 0
        top 100%
        margin-top 10px
        box-shadow $shadow-down

        &:before
          top -16px
          right 9px
          border-bottom-color $bg

      &.-se
        left 0
        top 100%
        margin-top 10px
        box-shadow $shadow-down

        &:before
          top -16px
          left 9px
          border-bottom-color $bg

      &.-n
        absCenterX()
        bottom 100%
        margin-bottom 10px
        box-shadow $shadow-up

        &:before
          bottom -16px
          left 50%
          margin-left -8px
          border-top-color $bg

      &.-nw
        right 0
        bottom 100%
        margin-bottom 10px
        box-shadow $shadow-up

        &:before
          bottom -16px
          right 9px
          border-top-color $bg

      &.-ne
        left 0
        bottom 100%
        margin-bottom 10px
        box-shadow $shadow-up

        &:before
          bottom -16px
          left 9px
          border-top-color $bg

      &.-w
        padding 0 $border-radius !important
        absCenterY()
        right 100%
        margin-right 10px
        box-shadow $shadow-left

        &:before
          right -16px
          absCenterY()
          border-left-color $bg

      &.-e
        padding 0 $border-radius !important
        absCenterY()
        left 100%
        margin-left 10px
        box-shadow $shadow-right

        &:before
          left -16px
          absCenterY()
          border-right-color $bg
</style>
