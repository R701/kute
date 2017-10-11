<template>
  <label :class="['checkbox', size ? `-${size}` : '', state ? `-${state}` : '', { '-checked': containedInArr, '-disabled': disabled, '-light': light }]">
    <input type="checkbox"
           ref="elem"
           :checked="containedInArr"
           :value="realValue"
           :disabled="disabled"
           @change="onChange"
           v-bind="$attrs"
           v-on="$listeners">
    <icon-check class="icon-check"></icon-check>
    <span class="checkbox-label"
          v-if="label">{{label}}</span>
    <span class="checkbox-content"
          v-else>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import props from './_props'
  import IconCheck from './../_Icons/Check'

  export default {

    model: {
      prop: 'arr',
      event: 'update'
    },

    components: {
      IconCheck
    },

    inheritAttrs: false,

    props,

    computed: {
      containedInArr () {
        return (this.arr && this.arr.indexOf(this.realValue) >= 0) || this.checked
      },

      realValue () {
        return this.value || this.label
      }
    },

    methods: {
      onChange (evt) {
        var newArr = this.arr.slice(0)
        this.$emit('update:checked', !this.containedInArr)
        if (this.containedInArr) {
          newArr.splice(this.arr.indexOf(this.realValue), 1)
        } else {
          newArr.push(this.realValue)
        }
        this.$emit('update', newArr)
        this.$emit('change', evt)
      }
    }
  }
</script>

<style scoped lang="stylus">
  label
    cursor pointer
    position relative

    &:before
      content ''
      display inline-block
      border-radius 20%
      background $black-darker
      width 0.93em
      height 0.93em
      vertical-align middle
      position relative
      transition all 0.1s $ease-in-cubic
      border 0 solid $theme-primary
      box-shadow psShadow(#000, 40%, 90, 1px, 0, 1px, true), psShadow(#000, 40%, 180, 1px, 0, 1px, true), psShadow(#000, 30%, -87, 1px, 0, 1px, true)

    &.-light
      &:before
        box-shadow none
        background $white-lighter

      .icon-check
        fill $white !important

      &.-checked
        &:before
          background $theme-primary !important

        &.-info
          &:before
            background $state-info !important

        &.-success
          &:before
            background $state-success !important

        &.-warn
          &:before
            background $state-warn !important

        &.-error
          &:before
            background $state-error !important

    &.-checked
      .icon-check
        opacity 1
        margin-top 0
        width 0.9em
        height 0.9em
        transform translateY(-50%) scale(1)

    &.-info
      .icon-check
        fill $state-info

    &.-success
      .icon-check
        fill $state-success

    &.-warn
      .icon-check
        fill $state-warn

    &.-error
      .icon-check
        fill $state-error

    &.-disabled
      cursor not-allowed
      opacity 0.6

    .icon-check
      absCenterY()
      left 0.1em
      fill $theme-primary
      opacity 0
      transition all 0.1s $ease-in-cubic
      transform translateY(-50%) scale(0.3)

  input
    vertical-align middle
    hide()

  span.checkbox-label, span.checkbox-content
    vertical-align middle
    padding-left 0.4em
    user-select none
</style>