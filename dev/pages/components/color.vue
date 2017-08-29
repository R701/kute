<template lang="html">
  <div class="c-color">
    <h3>1. 主题色</h3>
    <k-container flex w="567" mt="16">
      <color-block name="$theme-primary-lighter" class="p-l"></color-block>
      <color-block name="$theme-primary" class="p"></color-block>
      <color-block name="$theme-primary-darker" class="p-d"></color-block>
    </k-container>
    <k-container flex w="567" mt="16">
      <color-block name="$theme-secondary-lighter" class="s-l"></color-block>
      <color-block name="$theme-secondary" class="s"></color-block>
      <color-block name="$theme-secondary-darker" class="s-d"></color-block>
    </k-container>
    <br>
    <h3>2. 黑白灰</h3>
    <k-container flex w="567" mt="16">
      <color-block name="$black-lighter" class="b-l"></color-block>
      <color-block name="$black" class="b"></color-block>
      <color-block name="$black-darker" class="b-d"></color-block>
    </k-container>
    <k-container flex w="567" mt="16">
      <color-block name="$grey-lighter" class="g-l"></color-block>
      <color-block name="$grey" class="g"></color-block>
      <color-block name="$grey-darker" class="g-d"></color-block>
    </k-container>
    <k-container flex w="567" mt="16">
      <color-block name="$white-lighter" class="w-l"></color-block>
      <color-block name="$white" class="w"></color-block>
      <color-block name="$white-darker" class="w-d"></color-block>
    </k-container>
    <br>
    <h3>3. 状态色</h3>
    <k-container flex w="567" mt="16">
      <color-block name="$state-success" class="s-s"></color-block>
      <color-block name="$state-warn" class="s-w"></color-block>
      <color-block name="$state-error" class="s-e"></color-block>
      <color-block name="$state-info" class="s-i"></color-block>
    </k-container>
  </div>
</template>

<script>
  import ColorBlock from '@/components/ColorBlock'
  export default {
    components: {
      ColorBlock
    }
  }
</script>

<style lang="stylus" scoped>
.c-color >>> .color-block
  flex 1
  &.p-l .block
    background-color $theme-primary-lighter
  &.p .block
    background-color $theme-primary
  &.p-d .block
    background-color $theme-primary-darker
  &.s-l .block
    background-color $theme-secondary-lighter
  &.s .block
    background-color $theme-secondary
  &.s-d .block
    background-color $theme-secondary-darker
  &.b-l .block
    background-color $black-lighter
  &.b .block
    background-color $black
  &.b-d .block
    background-color $black-darker
  &.g-l .block
    background-color $grey-lighter
  &.g .block
    background-color $grey
  &.g-d .block
    background-color $grey-darker
  &.w-l .block
    background-color $white-lighter
  &.w .block
    background-color $white
  &.w-d .block
    background-color $white-darker

  &.s-s .block
    background-color $state-success
  &.s-w .block
    background-color $state-warn
  &.s-e .block
    background-color $state-error
  &.s-i .block
    background-color $state-info
</style>

