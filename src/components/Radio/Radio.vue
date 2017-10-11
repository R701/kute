<template>
  <label :class="['radio', size ? `-${size}` : '', state ? `-${state}` : '', { '-checked': checked, '-disabled': disabled, '-light': light }]">
    <input type="radio"
           ref="elem"
           :checked="checked"
           :value="realValue"
           :disabled="disabled"
           @change="onChange($event)"
           v-bind="$attrs"
           v-on="$listeners">
    <span class="radio-label"
          v-if="label">{{label}}</span>
    <span class="radio-content"
          v-else>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import props from './_props'
  export default {

    model: {
      prop: 'result',
      event: 'update'
    },

    inheritAttrs: false,

    props,

    computed: {
      realValue () {
        return this.value || this.label
      },

      checked () {
        return this.result == this.realValue
      }
    },

    methods: {
      onChange (evt) {
        this.$emit('update', this.realValue)
      }
    }
  }
</script>

<style scoped lang="stylus">
  label
    cursor pointer

    &:before
      content ''
      display inline-block
      border-radius 50%
      background $black-darker
      box-shadow psShadow(#000, 40%, 90, 1px, 0, 1px, true), psShadow(#000, 40%, 180, 1px, 0, 1px, true), psShadow(#000, 30%, -87, 1px, 0, 1px, true)
      width 1em
      height 1em
      vertical-align middle
      position relative
      transition all 0.1s $ease-in-cubic
      border 0 solid $theme-primary

    &.-light
      &:before
        background $white-lighter
        box-shadow none

    &.-checked
      &:before
        border-width 0.25em

    &.-info
      &:before
        border-color $state-info !important

    &.-success
      &:before
        border-color $state-success !important

    &.-warn
      &:before
        border-color $state-warn !important

    &.-error
      &:before
        border-color $state-error !important

    &.-disabled
      cursor not-allowed !important
      opacity 0.6 !important

  input
    vertical-align middle
    border 0
    clip rect(0 0 0 0)
    height 1px
    margin -1px
    overflow hidden
    padding 0
    position absolute
    width 1px

  span.radio-label, span.radio-content
    vertical-align middle
    padding-left 0.4em
    user-select none
</style>