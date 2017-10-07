<template>
  <div :class="['slider', size ? `-${size}` : '', state ? `-${state}-bg` : '', { '-disabled': disabled, '-vertical': vertical }]">
    <div class="slider-groove"
         :style="grooveStyle">
      <div class="slider-indicator">
        <div class="slider-handle"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'
  import u from '~utils'

  export default {
    props,

    data () {
      return {
        errmsg: '',
        focused: false
      }
    },

    computed: {
      grooveStyle () {
        return {
          width: u.getCSSLength(this.length)
        }
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
  &-indicator
    height $lineWidth
    width $defaultValue
    background $theme-primary
    position relative
    transition all .1s linear
  &-handle
    width 1em
    height 1em
    border-radius 50%
    background-color white
    right -.5em
    absCenterY()
    transition all .1s linear
    cursor pointer
    &:hover
      box-shadow 0 0 1em alpha($theme-primary, 1)
      transform scale(1.2)
</style>
