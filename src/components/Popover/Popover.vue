<template>
  <div class="popover" v-click-outside="close">
    <div :class='["popover-content",position]' v-show="isShow" >
      <slot name="popover">
      </slot>
    </div>
    <span v-on:click='open' >
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
import props from './_props'
const positionMap = {
  topLeft: '-top-left',
  top: '-top-center',
  topright: '-top-right',
  leftTop: '-left-top',
  left: '-left-middle',
  leftBottom: '-left-bottom',
  rightTop: '-right-top',
  right: '-right-middle',
  rightBottom: '-right-bottom'
}
export default {
  props,
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    position () {
      return positionMap[this.placement] || '-top-center'
    }
  },
  mounted () {},
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  }
}
</script>


<style lang="stylus" scoped>
$cushion=15px
$offset=115%

.popover
  position: relative
  display:inline-block
  &-content
    position: absolute
    background:#fff
    border-radius:2px
    min-width:100px
    word-break:break-all
    &.-top
      &-left
        transform: translateY(-($offset))
        &:after
          bottom:0
          transform:translateY(4px)
          border-top-color: #fff
          border-bottom-width:0px
          left:$cushion;
      &-center
        transform: translate(-50%,-($offset))
        left:50%
        &:after
          bottom:0
          transform:translate(-50%,4px)
          border-top-color: #fff
          border-bottom-width:0px
          left:50%;
      &-right
        transform: translate(0,-($offset))
        right:0
        &:after
          bottom:0
          transform:translate(0,4px)
          border-top-color: #fff
          border-bottom-width:0px
          right:$cushion
    &.-left
      &-top
        transform: translateX(-($offset))
        &:after
          right:0
          transform:translateX(4px)
          border-left-color: #fff
          border-right-width:0px
          top:$cushion;
      &-middle
        transform: translate(-($offset),-50%)
        top:50%
        &:after
          right:0
          transform:translate(4px,-50%)
          border-left-color: #fff
          border-right-width:0px
          top:50%;
      &-bottom
        transform: translate(-($offset),0px)
        bottom:0
        &:after
          right:0
          transform:translateX(4px)
          border-left-color: #fff
          border-right-width:0px
          bottom:$cushion
    &.-right
      &-top
        transform: translateX(-($offset))
        &:after
          left:0
          transform:translateX(-4px)
          border-right-color: #fff
          border-left-width:0px
          top:$cushion;
      &-middle
        transform: translate(-($offset),-50%)
        top:50%
        &:after
          left:0
          transform:translate(-4px,-50%)
          border-right-color: #fff
          border-left-width:0px
          top:50%;
      &-bottom
        transform: translateX($offset)
        bottom:0
        &:after
          left:0
          transform:translateX(-4px)
          border-right-color: #fff
          border-left-width:0px
          bottom:$cushion
    &:after
      content:''
      border:5px solid transparent
      position:absolute
</style>
