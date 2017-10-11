<template lang="html">
    <div class="progress" :style="{display:type==='bar'?'block':'inline-block'}">

    <div class="progress-bar-container" :class="size" v-if='type==="bar"'>
      <div class="progress-bar-main" :style="{  'clip-path': `inset(0 ${100-_percent}% 0 0 round 999px)`}" :class="`-${_state}`">
      </div>
      <span class="progress-bar-tooltip" :style="{left:`${_percent}%`}">
        {{_text}}
      </span>
    </div>
      <svg v-else class="progress-circle-container" viewBox="0 0 100 100" :class="`-${size}`">
        <text x="50" y="50" font-family="YaHei" font-size="15" class="progress-circle-text" dominant-baseline="central" text-anchor="middle">
    {{_text}}
  </text>
        <circle cx="50" cy="50" :r="47.5" stroke-width="5" fill="none" class="progress-circle-outsider"></circle>
        <circle cx="50" cy="50" :r="radius" stroke-width="5" fill="none" :stroke-dasharray="_dashLength" stroke-linecap="round" class="progress-circle-insider" :class="`-${_state}`"></circle>
    </svg>
    </div>
</template>

<script>
  import props from './_props'
  export default {
    props,
    data () {
      return {
        radius: 47.5
      }
    },
    computed: {
      _percent () {
        if (this.percent > 100) {
          return 100
        }
        if (this.percent < 0) {
          return 0
        }
        return this.percent
      },
      _dashLength () {
        const perimeter = 3.14 * 2 * this.radius
        return `${perimeter * this.percent / 100} ${(100 - this.percent) * perimeter / 100} `
      },
      _state () {
        if (this._percent >= 100) {
          return 'success'
        }
        return this.state
      },
      _text () {
        return this.format(this._percent, this._state)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $large = 20px
  $medium = 15px
  $small = 10px
  $xsmall = 5px

  .progress
    &-bar
      &-container
        height $medium
        font-size $medium
        background $black-darker
        rounded()
        border 1px solid rgba(0, 0, 0, 0.6)
        box-shadow psShadow(#000, 20%, 90, 1px, 0, 1px, true)
        position relative

        &.large
          height $large
          font-size $large

        &.small
          height $small
          font-size $small

        &.xsmall
          height $xsmall
          font-size $xsmall

      &-main
        clip-path inset(0 10% 0 0 round 999px)
        height 100%
        overflow hidden
        will-change clip-path
        transition all 0.3s

        &.-active
          background linear-gradient(90deg, #01f1a4, #15526b)

        &.-failed
          background linear-gradient(to right, #a73737, #7a2828)

        &.-success
          background linear-gradient(90deg, #01f1a4, #15526b)

      &-tooltip
        z-index 999
        background $black-darker
        rounded()
        display inline-block
        padding 5px 15px
        box-shadow $shadow-basic
        position absolute
        left 0px
        top calc(100% + 5px)
        transform translateX(-50%)
        text-align center
        will-change transform
        transition all 0.3s

        &:before
          position absolute
          content ''
          rounded()
          display inline-block
          height 10px
          width 10px
          top -3px
          left 50%
          transform translateX(-50%)
          background $black-darker

    &-circle
      &-container
        width 250px
        height 250px

        &.-large
          width 300px
          height 300px

        &.-small
          width 200px
          height 200px

        &.-xsmall
          width 100px
          height 100px

      &-outsider
        stroke $black-darker

      &-insider
        transform-origin 50% 50%
        transform rotate(-90deg)
        stroke #0ba488
        transition all 0.3s

        &.-active
          stroke #03e19e

        &.-failed
          stroke $state-error

      &-text
        fill $white
</style>
