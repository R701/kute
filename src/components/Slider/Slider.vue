<template>
  <div :class="['slider', state ? `-${state}-bg` : '', { '-disabled': disabled }]">
    <div class="slider-groove"
         :style="grooveStyle"
         @mousedown="onGrooveMouseDown">
      <template v-if="totalSteps && hint">
        <div class="slider-hint"
             @mousedown.stop.prevent="onHintMouseDown(n)"
             v-for="n in (totalSteps + 1)"
             :key="n"
             :style="{left: `${((n - 1)/totalSteps) * length}px`}">
          <div class="slider-annotation"
               v-if="annotated">{{((n - 1) * step).toFixed(precision)}}</div>
        </div>
      </template>
      <div class="slider-indicator"
           :style="{width: `${this.offset}px`}">
        <div :class="['slider-handle', {'-dragged': focused}]"
             v-dragged="onHandlerDrag"
             @mousedown.stop.prevent
             :style="{transform: `translateX(-50%)${focused ? ' scale(0.35)' : ''}`, left: `${this.offset}px`}">
        </div>
        <transition name="zoom-down-in">
          <div class="slider-tooltip"
               v-if="tip && focused">{{formattedTipValue}}</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'

  import { directive as vDragged } from 'v-dragged'

  export default {
    props,

    model: {
      event: 'update:value',
      prop: 'value'
    },

    data () {
      return {
        errmsg: '',
        focused: false,
        offset: 0,
        offsetStepCount: 0
      }
    },

    directives: {
      dragged: vDragged
    },

    computed: {
      grooveStyle () {
        return {
          width: this.length + 'px'
        }
      },

      formattedTipValue () {
        if (this.precision) {
          return this._value.toFixed(this.precision)
        } else {
          return this._value
        }
      },

      ratio () {
        return this.offset / this.length
      },

      rangeSize () {
        return this.max - this.min
      },

      stepRatio () {
        if (!this.step) return null
        return this.step / this.rangeSize
      },

      stepSize () {
        return this.stepRatio * this.length
      },

      totalSteps () {
        if (!this.step) return 0
        return this.rangeSize / this.step
      },

      _value () {
        var result = this.min + this.ratio * this.rangeSize
        if (this.precision) {
          result = +result.toFixed(this.precision)
        }

        this.$emit('update:value', result)
        return result
      }
    },

    mixins: [withIcon],

    mounted () {
      if (this.value) {
        this.offset = (this.value - this.min) / this.rangeSize * this.length
      }
    },

    methods: {

      onChange () {
        if (!this.validateOnBlur) {
          this.validate()
        }
      },

      async validate () {
        if (typeof this.validator === 'function') {
          var returnValue = this.validator(this.value)
          if (returnValue instanceof Promise) {
            this.errmsg = await returnValue
          } else {
            this.errmsg = returnValue
          }
        }
      },

      onHandlerDrag ({ deltaX, offsetX, first, last, el }) {
        if (this.disabled) return
        if (first) {
          this.focused = true
          document.documentElement.style.cursor = 'pointer'
          document.documentElement.style.userSelect = 'none'
          this.offsetStepCount = 0
        }
        if (last) {
          this.focused = false
          document.documentElement.style.cursor = 'default'
          document.documentElement.style.userSelect = 'unset'
        }
        if (!deltaX) return
        var realStep = 0
        if (!isNaN(this.stepSize)) {
          if (deltaX > 0 && offsetX >= this.stepSize * (this.offsetStepCount + 1)) {
            this.offsetStepCount++
            realStep = this.stepSize
          }

          if (deltaX < 0 && offsetX <= this.stepSize * (this.offsetStepCount - 1)) {
            this.offsetStepCount--
            realStep = -this.stepSize
          }
        }
        var newOffset = this.step ? this.offset + realStep : this.offset + deltaX
        if (isNaN(+deltaX)) return
        if (newOffset < 0) newOffset = 0
        if (newOffset > this.length) newOffset = this.length
        this.offset = newOffset
      },

      onGrooveMouseDown (evt) {
        var newOffset = evt.offsetX
        if (!isNaN(this.stepSize)) {
          newOffset = Math.ceil(evt.offsetX / this.stepSize) * this.stepSize
        }
        this.offset = newOffset
      },

      onHintMouseDown (n) {
        this.offset = (n - 1) * this.stepSize
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $lineWidth = 2px
  $defaultValue = 0%

  .slider
    font-size 14px
    height 2.5em
    display inline-block

    &-groove
      display inline-block
      height $lineWidth
      background-color $grey-darker
      cursor pointer
      position relative

    &-hint
      width $lineWidth
      height $lineWidth
      background $white-darker
      position absolute

    &-annotation
      top 0.5em
      font-size 12px
      absCenterX()
      color $white-darker

    &-indicator
      height $lineWidth
      width $defaultValue
      background $theme-primary
      position relative

    &-tooltip
      tooltip(true)
      right 0
      position absolute
      bottom calc(100% + 1em)
      transform translateX(50%) scale(1)
      will-change transform
      transition all 0.3s linear
      user-select none

    &-handle
      width 1em
      height 1em
      border-radius 50%
      background-color white
      left 0
      absCenterY()
      transition box-shadow 0.3s, transform 0.2s
      cursor pointer

      &:hover, &.-dragged
        box-shadow 0.1em 0.1em 1em alpha($theme-primary, 1), -0.1em -0.1em 1em alpha($theme-primary, 1)

  .-disabled
    .slider-indicator
      background-color $white-darker
      cursor not-allowed

    .slider-handle
      background-color $grey-darker
      cursor not-allowed

      &:hover
        box-shadow none

  .zoom-down-in-enter-active, .zoom-down-in-leave-active
    transition all 0.5s $ease-out-back

  .zoom-down-in-enter, .zoom-down-in-leave-to
    transform-origin 50% 100% !important
    transform translateX(50%) scale(0) !important
</style>
