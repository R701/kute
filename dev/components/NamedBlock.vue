<template>
  <div :class="['named-block', position, `_${name}`]">
    <div class="named-block-main">
      <slot></slot>
    </div>
    <div class="named-block-name">{{name}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      position: {
        type: String,
        default: 'bottom',
        validator (val) {
          const valids = ['top', 'bottom', 'left', 'right']
          return valids.indexOf(val) >= 0
        }
      }
    }
  }
</script>

<style lang="stylus">
.named-block
  display flex
  align-items center
  &.top
    flex-direction column-reverse
  &.bottom
    flex-direction column
  &.right
    flex-direction row
  &.left
    flex-direction row-reverse
  &-name
    font-size $font-size-h6
    color $grey-lighter
    text-shadow $shadow-basic
    line-height 3
    text-align center
</style>
