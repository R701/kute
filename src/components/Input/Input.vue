<template>
  <div :class="['input-field', `-${state}`, `-${size}`, { '-focused': focused, '-disabled': disabled, '-error': errmsg, '-pr': clearable || loading || select, '-pl': icon, '-block': block, 'select': select, 'textarea': textarea, '-resizable': resize != 'none' }]"
       v-click-outside="onClickOutside">
    <label :for="$attrs.id"
           v-if="label">{{label}}</label>
    <div class="input-wrapper">
      <component :is="tag"
                 ref="input"
                 :value="value"
                 v-bind="$attrs"
                 v-on="$listeners"
                 :disabled="disabled"
                 :readonly="readonly || select"
                 :spellcheck="spellcheck"
                 @input="onInput"
                 @focus="onFocus"
                 @blur="onBlur">{{textarea && value ? value: ''}}</component>
      <i :class="['input-icon', `${iconClassPrefix}${icon}`]"
         v-if="icon"></i>
      <svg v-if="clearable && value && !loading && !select"
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
      <svg v-if="select"
           t="1504710944573"
           :class="['icon', 'icon-down', { '-reverse': showOptions }]"
           style=""
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="3844"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           width="200"
           height="200">
        <path d="M749.991674 379.789628c-7.961956-7.954731-20.836915-7.954731-28.769971 0L512.859776 607.90472 304.505073 379.789628c-7.933056-7.954731-20.822465-7.954731-28.748296 0-7.954731 7.976406-7.954731 20.894715 0 28.849446l221.699287 242.745728c4.255528 4.241078 9.876582 6.061779 15.418161 5.765554 5.541579 0.296225 11.155408-1.524476 15.410936-5.765554l221.720962-242.745728C757.917505 400.684343 757.917505 387.766034 749.991674 379.789628z"
              p-id="3845"></path>
      </svg>
      <div class="input-spinner"
           v-if="loading && !select">
        <spinner color="#8a8f99"
                 d="1.4em"></spinner>
      </div>
      <transition name="errmsg">
        <span class="input-errmsg"
              v-if="errmsg">{{errmsg}}</span>
      </transition>
      <transition name="suggestions">
        <div class="suggestions"
             v-if="!select && suggestions && showSuggestions">
          <div class="suggestion-item"
               v-for="item in suggestions"
               :key="item"
               @click="onSuggestionItemClick(item)">{{item}}</div>
        </div>
      </transition>
      <transition name="options">
        <div class="options"
             v-if="select && options && showOptions">
          <div class="option-item"
               v-for="item in options"
               :key="item[optionValueKey]"
               @click="onOptionItemClick(item)">{{item[optionTextKey]}}</div>
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
        showSuggestions: false,
        showOptions: false
      }
    },

    computed: {
      tag () {
        return this.textarea ? 'textarea' : 'input'
      }
    },

    watch: {
      value (newVal) {
        if (this.select) {
          this.validate()
        }
      }
    },

    mounted () {
      this.bindValidationEvents()

      var elem = this.$refs.input
      if (this.textarea) {
        elem.style.resize = this.resize
        if (this.autoHeight) {
          this.autoResize()
        }
      }

      if (this.autoSelect && this.value) {
        elem.focus()
        elem.select()
      }
    },

    methods: {
      onInput (evt) {
        this.$emit('sync', evt.target.value)
        this.$emit('input', evt)
      },

      onFocus () {
        this.focused = true
        this.showSuggestions = true
        this.showOptions = true
      },

      onBlur () {
        this.focused = false
      },

      autoResize () {
        var observe = function (element, event, handler) {
          element.addEventListener(event, handler, false)
        }

        var text = this.$refs.input
        function resize () {
          text.style.height = 'auto'
          text.style.height = text.scrollHeight + 'px'
        }
        /* 0-timeout to get the already changed text */
        function delayedResize () {
          window.setTimeout(resize, 0)
        }
        observe(text, 'change', resize)
        observe(text, 'cut', delayedResize)
        observe(text, 'paste', delayedResize)
        observe(text, 'drop', delayedResize)
        observe(text, 'keydown', delayedResize)
        resize()
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
        this.showOptions = false
      },

      onSuggestionItemClick (item) {
        this.$emit('sync', item)
        this.showSuggestions = false
      },

      onOptionItemClick (item) {
        this.$emit('sync', item[this.optionTextKey])
        this.showOptions = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
.input-field
  display inline-block
  font-size 14px
  line-height 34px
  label
    display block
    line-height 1.5
  .input-wrapper
    position relative
    input, textarea
      color $grey-darker
      background-color $white-darker
      border-radius 2px
      border 0
      font-size inherit
      outline none
      padding 0 (10px/14px)em
      transition all .2s
      position relative
      ::placeholder
        color $grey-lighter
    input
      height 34px
      width 220px
    textarea
      line-height 1.5
      min-height 76px
      width 220px
      pv(5px)
    .input-errmsg
      font-size $font-size-h6
      position absolute
      left 0
      bottom  -1.3em
      line-height 1
      color $state-error

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
      left (6px/14px)em
      top 0
      color $grey-darker
      display block
      width 1em
      height 100%
      font-size percentage(16px/14px)
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
        background-color transparent
        padding 0 (10px/14px)em
        color $grey-darker
        cursor pointer
        &:hover
          color $white-lighter
          background-color $grey-lighter
    .options
      background-color $white
      display flex
      flex-direction column
      box-shadow psShadow(#000, 43%, 120, 2px, 0, 8px)
      absCenterY()
      right 2.3em
      min-width 100%
      top 2px + 34px
      z-index 10
      border-radius 2px
      overflow hidden
      .option-item
        background-color transparent
        padding 0 (10px/14px)em
        color $grey-darker
        cursor pointer
        &:hover
          color $white-lighter
          background-color $grey-lighter
.select
  input
    cursor pointer
  .icon-down
    position absolute
    width 2em
    height 2em
    fill $grey-darker
    absCenterY()
    right (6px/14px)em
    cursor pointer
    transition all .2s
    &.-reverse
      transform rotate(-180deg)

.textarea
  .input-errmsg
    bottom  -.4em !important
  .input-spinner
    position absolute
    top auto !important
    transform: none
    bottom .5em !important

.-focused
  input, textarea
    color $black !important
    background-color $white-lighter !important
    box-shadow psShadow(#000, 40%, 90, 1px, 0, 2px, true), psShadow(#000, 40%, 180, 1px, 0, 2px, true), psShadow(#000, 30%, -87, 1px, 0, 2px, true) !important
.-disabled
  input, textarea
    cursor not-allowed !important
    background-color alpha($white-darker, 50%) !important
    &::placeholder
      color $grey-lighter !important
.-success
  input, textarea
    border 1px solid $state-success !important
.-warn
  input, textarea
    border 1px solid $state-warn !important
.-error
  input, textarea
    border 1px solid $state-error !important
.-pr
  input
    padding-right 2em !important
.-pl
  input
    padding-left 2em !important
.-block
  input, textarea
    width 100% !important
.-small
  line-height 26px !important
  input
    height 26px !important
    min-width 180px !important
  textarea
    min-height 48px !important
    width 180px
  .suggestions
    top 2px + 26px !important
.-large
  line-height 44px !important
  input
    height 44px !important
    min-width 260px !important
  textarea
    min-height 98px !important
    width 264px
  .suggestions
    top 2px + 44px !important

.errmsg-enter-active, .errmsg-leave-active
  transition: all .2s
.errmsg-enter, .errmsg-leave-to
  transform: translateY(-50%)
  opacity: 0
  filter: saturate(0%)

.suggestions-enter-active, .suggestions-leave-active
  transition: all .1s
.suggestions-enter, .suggestions-leave-to
  transform: translateY(-10px)
  opacity: 0
  filter: saturate(0%)

.options-enter-active, .options-leave-active
  transition: all .1s
.options-enter, .options-leave-to
  margin-right -10px
  opacity: 0
</style>
