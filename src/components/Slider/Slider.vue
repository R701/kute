<template>
  <div :class="['slider', size ? `-${size}` : '', state ? `-${state}-bg` : '', { '-disabled': disabled, '-vertical': vertical }]">
    <div class="slider-groove"
         :style="grooveStyle">
      <div class="slider-indicator"
           :style="{width: `${this.offset}px`}">
        <div :class="['slider-handle', {'-dragged': focused}]"
             v-dragged="onHandlerDrag"
             v-tooltip="_value"
             :style="{transform: `translateX(-50%)${focused ? ' scale(1.25)' : ''}`, left: `${this.offset}px`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'
  // import u from '~utils'

  import { directive as vDragged } from 'v-dragged'
  import { VTooltip } from 'v-tooltip'
  console.log(VTooltip)

  export default {
    props,

    data () {
      return {
        errmsg: '',
        focused: false,
        offset: 0
      }
    },

    directives: {
      dragged: vDragged,
      tooltip: VTooltip
    },

    computed: {
      grooveStyle () {
        return {
          width: this.length + 'px'
        }
      },

      ratio () {
        return this.offset / this.length
      },

      _value () {
        return this.min + this.ratio * (this.max - this.min)
      }
    },

    mixins: [withIcon],

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

      onHandlerDrag ({ deltaX, deltaY, first, last, el }) {
        if (first) {
          this.focused = true
          document.documentElement.style.cursor = 'pointer'
        }
        if (last) {
          this.focused = false
          document.documentElement.style.cursor = 'default'
        }
        var newOffset = this.offset + deltaX
        if (isNaN(+deltaX) || newOffset < 0 || newOffset > this.length) return
        this.offset = newOffset
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $lineWidth = 2px
  $defaultValue = 0%

  .slider
    &-groove
      display inline-block
      height $lineWidth
      background-color $grey-darker
      cursor pointer

    &-indicator
      height $lineWidth
      width $defaultValue
      background $theme-primary
      position relative

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
</style>
