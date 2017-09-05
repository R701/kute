<template>
  <div :class="['input-field', `-${state}`, { '-focused': focused, '-disabled': disabled, '-error': errmsg }]">
    <label :for="$attrs.id"
           v-if="label">{{label}}</label>
    <div class="input-wrapper">
      <input ref="input"
             :value="value"
             v-bind="$attrs"
             v-on="$listeners"
             :disabled="disabled"
             @input="onInput"
             @focus="onFocus"
             @blur="onBlur">
      <transition name="errmsg">
        <span class="input-errmsg"
              v-if="errmsg">{{errmsg}}</span>
      </transition>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  export default {
    inheritAttrs: false,
    props,
    model: {
      prop: 'value',
      event: 'sync'
    },

    data () {
      return {
        focused: false,
        errmsg: ''
      }
    },

    mounted () {
      this.bindValidationEvents()
    },

    methods: {
      onInput (evt) {
        this.$emit('sync', evt.target.value)
        this.$emit('input', evt)
      },

      onFocus () {
        this.focused = true
      },

      onBlur () {
        this.focused = false
      },

      bindValidationEvents () {
        const input = this.$refs.input
        let events = this.validatorEvent.split(' ')
        for (var i = 0, len = events.length; i < len; i++) {
          var event = events[i]
          input.addEventListener(event, this.validate)
        }

        if (typeof this.validator === 'string') {
          this.errmsg = this.validator
        }
      },

      async validate () {
        console.log(this.value)
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
.input-field
  display inline-flex
  align-items center
  font-size 14px
  .input-wrapper
    position relative
    input
      color $grey-darker
      background-color $white-darker
      height 34px
      width 220px
      border-radius 2px
      border 0
      font-size inherit
      outline none
      padding 0 (10px/14px)em
      transition all .2s
      ::placeholder
        color $grey-lighter
    .input-errmsg
      font-size $font-size-h6
      position absolute
      left 0
      bottom  -1.6em
      color $state-error
      z-index 1

.-focused
  input
    color $black !important
    background-color $white-lighter !important
    box-shadow psShadow(#000, 40%, 90, 1px, 0, 2px, true), psShadow(#000, 40%, 180, 1px, 0, 2px, true), psShadow(#000, 30%, -87, 1px, 0, 2px, true) !important
.-disabled
  cursor not-allowed !important
  input
    background-color alpha($white-darker, 50%) !important    
    &::placeholder
      color $grey-lighter !important
.-success
  input
    border 1px solid $state-success !important
.-warn
  input
    border 1px solid $state-warn !important
.-error
  input
    border 1px solid $state-error !important


.errmsg-enter-active, .errmsg-leave-active
  transition: all .2s
.errmsg-enter, .errmsg-leave-to
  transform: translateY(-50%)
  opacity: 0
  filter: saturate(0%)
</style>
