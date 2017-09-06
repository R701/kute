<template>
  <div :class="['input-field', `-${state}`, `-${size}`, { '-focused': focused, '-disabled': disabled, '-error': errmsg, '-pr': clearable || loading, '-pl': icon, '-block': block }]"
       v-click-outside="onClickOutside">
    <label :for="$attrs.id"
           v-if="label">{{label}}</label>
    <div class="input-wrapper">
      <i :class="['input-icon', `${iconClassPrefix}${icon}`]"
         v-if="icon"></i>
      <input ref="input"
             :value="value"
             v-bind="$attrs"
             v-on="$listeners"
             :disabled="disabled"
             @input="onInput"
             @focus="onFocus"
             @blur="onBlur">
      <svg v-if="clearable && value && !loading"
           @click="onClearClick"
           t="1504678682093"
           class="icon icon-clear"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2501"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M512 423.1257264239249L165.48581064762436 76.61154001734309C160.06906888753866 71.19479678436056 152.5421902526894 71.5893652373976 147.65639099467006 76.475164495417L76.475164495417 147.65639099467006C71.44745898769497 152.68409650239215 71.65042270457474 160.52469333485612 76.61154001734309 165.48581064762436L423.1257264239249 512 76.61154001734309 858.5141878794789C71.65042270457474 863.4753066651442 71.44745898769497 871.3159005518139 76.475164495417 876.3436090053299L147.65639099467006 947.5248325587894C152.5421902526894 952.4106332897054 160.06906888753866 952.8052032156394 165.48581064762436 947.3884614555537L512 600.874273576075 858.5141878794789 947.3884614555537C863.9309296395645 952.8052032156394 871.4578068015169 952.4106332897054 876.3436090053299 947.5248325587894L947.5248325587894 876.3436090053299C952.5525395394081 871.3159005518139 952.3495802412192 863.4753066651442 947.3884614555537 858.5141878794789L600.874273576075 512 947.3884614555537 165.48581064762436C952.3495802412192 160.52469333485612 952.5525395394081 152.68409650239215 947.5248325587894 147.65639099467006L876.3436090053299 76.475164495417C871.4578068015169 71.5893652373976 863.9309296395645 71.19479678436056 858.5141878794789 76.61154001734309L512 423.1257264239249Z"
              p-id="2316"></path>
      </svg>
      <div class="input-spinner"
           v-if="loading">
        <spinner color="#8a8f99"
                 d="1.4em"></spinner>
      </div>
      <transition name="errmsg">
        <span class="input-errmsg"
              v-if="errmsg">{{errmsg}}</span>
      </transition>
      <transition name="errmsg">
        <div class="suggestions"
             v-if="suggestions && showSuggestions">
          <div class="suggestion-item"
               v-for="item in suggestions"
               :key="item"
               @click="onSuggestionItemClick(item)">{{item}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'

  import Spinner from '~components/Spinner/Spinner'

  export default {
    inheritAttrs: false,
    props,
    model: {
      prop: 'value',
      event: 'sync'
    },

    mixins: [withIcon],

    components: {
      Spinner
    },

    data () {
      return {
        focused: false,
        errmsg: '',
        showSuggestions: false
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
        this.showSuggestions = true
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
      },

      onClearClick () {
        this.$emit('sync', '')
      },

      onClickOutside () {
        this.showSuggestions = false
      },

      onSuggestionItemClick (item) {
        this.$emit('sync', item)
        this.showSuggestions = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
.input-field
  font-size 14px
  label
    display block
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
      position relative
      z-index 1
      ::placeholder
        color $grey-lighter
    .input-errmsg
      font-size $font-size-h6
      position absolute
      left 0
      bottom  -1.6em
      color $state-error
      z-index 1
    .icon-clear
      position absolute
      width 1em
      height 1em
      fill $grey-lighter
      absCenterY()
      right (8px/14px)em
      cursor pointer
      transition all .2s
      &:hover
        fill $grey-darker
    .input-spinner
      position absolute
      absCenterY()
      right (8px/14px)em
    .input-icon
      position absolute
      absCenterY()
      left (6px/14px)em
      color $grey-darker
      display block
      width 1em
      height 1.3em
    .suggestions
      background-color $white
      display flex
      flex-direction column
      box-shadow psShadow(#000, 43%, 120, 2px, 0, 8px)
      position absolute
      min-width 100%
      top 2px + 34px
      z-index 10
      .suggestion-item
        height 34px
        line-height 34px
        background-color transparent
        padding 0 (10px/14px)em
        color $grey-darker
        cursor pointer
        &:hover
          color $white-lighter
          background-color $grey-lighter

.-focused
  input
    color $black !important
    background-color $white-lighter !important
    box-shadow psShadow(#000, 40%, 90, 1px, 0, 2px, true), psShadow(#000, 40%, 180, 1px, 0, 2px, true), psShadow(#000, 30%, -87, 1px, 0, 2px, true) !important
.-disabled
  input
    cursor not-allowed !important
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
.-pr
  input
    padding-right 2em !important
.-pl
  input
    padding-left 2em !important
.-block
  input
    width 100% !important
.-small
  input
    height 28px !important
    min-width 180px !important
.-large
  input
    height 42px !important
    min-width 260px !important

.errmsg-enter-active, .errmsg-leave-active
  transition: all .2s
.errmsg-enter, .errmsg-leave-to
  transform: translateY(-50%)
  opacity: 0
  filter: saturate(0%)
</style>
