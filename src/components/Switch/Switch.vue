<template>
  <div :class="['switch', size ? `-${size}` : '', { '-disabled': disabled, '-light': light, '-checked': innerChecked, }]"
    @click="onClick">
    <input type="checkbox"
      ref="checkbox"
      :checked="innerChecked"
      :disabled="disabled"
      @change="onChange"
      @click.stop>
    <div :class="['switch-indicator', state ? `-${state}-bg` : '']"></div>
  </div>
</template>

<script>
  import Checkbox from './../Checkbox/Checkbox'
  export default {
    extends: Checkbox,

    model: {
      prop: 'checked',
      event: 'update:checked'
    },

    inheritAttrs: true,

    data () {
      return {
        innerChecked: false
      }
    },

    watch: {
      checked (val) {
        this.innerChecked = val
      }
    },

    mounted () {
      this.innerChecked = this.checked
    },

    methods: {
      onClick () {
        this.$refs.checkbox.click()
      },

      onChange (evt) {
        this.innerChecked = evt.target.checked
        this.$emit('update:checked', this.innerChecked)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $w = 2.8em
  $h = 1.3em

  .switch
    display inline-block
    min-width $w
    height $h
    rounded()
    background $black-darker
    position relative
    cursor pointer
    transform translateY(0)
    vertical-align middle

    &:after
      content ''
      display block
      absCover()
      box-shadow psShadow(#000, 80%, 90, 1px, 0, 1px, true), psShadow(#000, 80%, 180, 1px, 0, 1px, true)
      rounded()

    input
      hide()

    &-indicator
      width $h
      height 100%
      background $theme-primary
      rounded()
      transition all 0.1s $ease-in-cubic
      position absolute
      top 0
      left 0

      &:after
        content ''
        display block
        position absolute
        height $h
        width $h
        right 0
        top 0
        background $grey-lighter
        border-radius 50%
        rounded()
        z-index 2
        box-shadow $shadow-material
        transition background 0.25s $ease-in-cubic, right 0.1s $ease-in-cubic
        transform scale(1.1)

  .-light
    background $white-lighter !important

    &:after
      box-shadow none

    .switch-indicator
      &:after
        background $white-darker

  .-checked
    .switch-indicator
      width $w

      &:after
        right unit(operate('/', -1px, 14px), 'em')
        background white
        box-shadow $shadow-material

  .-disabled
    cursor not-allowed
    opacity 0.6
</style>
