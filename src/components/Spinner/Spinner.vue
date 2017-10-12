<template>
  <div :class="['spinner', { '-rainbow': rainbow }]"
       :style="{width}">
    <svg class="circular"
         viewBox="25 25 50 50"
         :style="{animationDuration: duration + 's'}">
      <circle class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              :stroke="color"
              :stroke-width="strokeWidth"
              stroke-miterlimit="10"
              :style="{animationDuration: duration * (3/4) + 's'}" />
    </svg>
  </div>
</template>

<script>
  import u from '~utils'
  import props from './_props'

  export default {
    props,

    computed: {
      width () {
        return u.getCSSLength(this.d)
      }
    }
  }
</script>


<style lang="stylus" scoped>
  $green = #008744
  $blue = #0057e7
  $red = #d62d20
  $yellow = #ffa700

  // scaling... any units
  .spinner
    position relative
    margin 0 auto

    &:before
      content ''
      display block
      padding-top 100%

  .circular
    animation rotate 2s linear infinite
    height 100%
    transform-origin center center
    width 100%
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto

  .path
    stroke-dasharray 1, 200
    stroke-dashoffset 0
    animation dash 1.5s ease-in-out infinite
    stroke-linecap round

  .spinner.-rainbow
    .path
      // animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite
      animation-name dash, color
      animation-duration 1.5s, 6s
      animation-timing-function ease-in-out
      animation-iteration-count infinite

  @keyframes rotate
    100%
      transform rotate(360deg)

  @keyframes dash
    0%
      stroke-dasharray 1, 200
      stroke-dashoffset 0

    50%
      stroke-dasharray 89, 200
      stroke-dashoffset -35px

    100%
      stroke-dasharray 89, 200
      stroke-dashoffset -124px

  @keyframes color
    100%, 0%
      stroke $red

    40%
      stroke $blue

    66%
      stroke $green

    80%, 90%
      stroke $yellow
</style>
