<template>
  <div :class="['input-field', size ? `-${size}` : '', state ? `-${state}` : '', { '-focused': focused, '-disabled': disabled, '-error': errmsg, '-pr': clearable || loading || select, '-pl': icon, '-block': block, 'select': select, 'textarea': textarea, '-resizable': resize != 'none' }]"
       v-click-outside="onClickOutside">
    <label :for="$attrs.id"
           v-if="label">{{label}}</label>
    <div class="input-wrapper">
      <component :is="tag"
                 ref="input"
                 :value="realValue"
                 v-bind="$attrs"
                 v-on="$listeners"
                 :disabled="disabled"
                 :readonly="readonly || select"
                 :spellcheck="spellcheck"
                 @input="onInput"
                 @focus="onFocus"
                 @blur="onBlur"
                 @change="onChange"
                 @keydown="onKeydown">{{textarea && value ? value: ''}}</component>
      <i :class="['input-icon', `${config$.iconClassPrefix}${icon}`, { '-icon-clickable': iconClickable }]"
         v-if="icon"
         @click="onIconClick"></i>
      <icon-close v-if="clearable && value && !loading && !select"
                  @click.native="onClearClick"
                  class="icon icon-clear"></icon-close>
      <icon-arrow-down v-if="select"
                       :class="['icon', 'icon-down', { '-reverse': showOptions }]"
                       @click.native.stop="onArrowClick"></icon-arrow-down>
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
             v-if="suggestions && suggestions.length && showSuggestions">
          <div :class="['suggestion-item', { '-active': index == activeIndex }]"
               v-for="(item, index) in suggestions"
               :key="item"
               @click="onSuggestionItemClick(item, index)">{{item}}</div>
        </div>
      </transition>
      <transition name="options">
        <div class="options"
             v-if="showOptions"
             ref="options"
             @DOMMouseScroll.stop="handleWheel"
             @wheel.stop="handleWheel"
             @mousewheel.stop="handleWheel">
          <div :class="['option-item', { '-active': index == activeIndex }]"
               v-for="(item, index) in options"
               :key="item[optionValueKey]"
               @click="onOptionItemClick(item, index)">{{item[optionTextKey]}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import withIcon from '~mixins/with-icon'
  import size from '~mixins/size'

  import Spinner from '~components/Spinner/Spinner'
  import IconClose from '~components/_Icons/Close'
  import IconArrowDown from '~components/_Icons/ArrowDown'

  export default {
    inheritAttrs: false,
    props,
    model: {
      prop: 'value',
      event: 'sync'
    },

    mixins: [withIcon, size],

    components: {
      Spinner,
      IconClose,
      IconArrowDown
    },

    data () {
      return {
        focused: false,
        errmsg: '',
        activeIndex: -1,
        showSuggestions: false,
        showOptions: false,
        innerValue: '',
        scrollableList: false,
        scrollMax: 0,
        scrollMin: 0
      }
    },

    computed: {
      tag () {
        return this.textarea ? 'textarea' : 'input'
      },

      realValue () {
        return this.value || this.innerValue
      },

      listShown () {
        return this.showOptions || this.showSuggestions
      },

      realList () {
        return this.select ? this.options : this.suggestions
      }
    },

    watch: {
      value (newVal) {
        if (this.select) {
          this.validate()
        } else {
          this.$refs.input.value = newVal
        }
      },

      showOptions (newVal) {
        if (newVal) {
          this.$nextTick(() => {
            var options = this.$refs.options
            if (window) {
              var windowHeight = window.innerHeight
              var optionHeight = options.clientHeight
              this.scrollableList = optionHeight > windowHeight
              if (this.scrollableList) {
                this.scrollMax = -options.getBoundingClientRect().top
                this.scrollMin = -(optionHeight - this.scrollMax - windowHeight)
              }
            }
          })
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
        this.innerValue = evt.target.value
        this.$emit('input', evt)
        this.showList()
      },

      onFocus (evt) {
        this.focused = true
        this.showList()
        this.$emit('focus', evt)
      },

      showList () {
        if (this.select) {
          this.showOptions = true
        } else if (this.suggestions && this.suggestions.length) {
          this.showSuggestions = true
        }
      },

      onBlur (evt) {
        this.focused = false
        if (this.showSuggestions) {
          setTimeout(() => {
            this.showSuggestions = false
            this.showOptions = false
          }, 500)
        }
        this.$emit('blur', evt)
      },

      onChange (evt) {
        this.$emit('change', evt)
        if (!this.select) {
          this.activeIndex = 0
        }
      },

      onKeydown (evt) {
        this.$emit('keydown', evt)
        if (this.textarea) return
        if (event.defaultPrevented) {
          return // Do nothing if the event was already processed
        }
        var length = this.realList ? this.realList.length : 0
        switch (evt.key) {
          case 'ArrowDown':
            if (this.listShown && this.activeIndex < length - 1) {
              evt.preventDefault()

              this.activeIndex++
            }
            break
          case 'ArrowUp':
            if (this.listShown && this.activeIndex > 0) {
              evt.preventDefault()

              this.activeIndex--
            }
            break
          case 'Enter':
            this.$emit('enter')
            if (this.listShown) {
              evt.preventDefault()
              var item = this.realList[this.activeIndex]
              var synced = this.showOptions ? item[this.optionTextKey] : item
              this.$emit('sync', synced)
              this.innerValue = synced
              this.showSuggestions = false
              this.showOptions = false
              this.$refs.input.select()
              if (!this.select) {
                this.$emit('suggestion-select', item)
              }
            } else {
              this.showOptions = true
              this.$emit('enter')
            }
            break
          case 'Escape':
            if (this.listShown) {
              evt.preventDefault()
              this.showOptions = false
              this.showSuggestions = false
            }
            break
        }
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
        this.innerValue = ''
      },

      onClickOutside () {
        this.showSuggestions = false
        this.showOptions = false
      },

      onSuggestionItemClick (item) {
        this.innerValue = item
        this.$emit('sync', this.innerValue)
        this.showSuggestions = false
        this.$refs.input.select()
        this.$emit('suggestion-select', item)
      },

      onOptionItemClick (item, index) {
        this.innerValue = item[this.optionTextKey]
        this.$emit('sync', this.innerValue)
        this.showOptions = false
        this.activeIndex = index
      },

      onIconClick () {
        if (this.iconClickable) {
          this.$emit('icon-click')
        }
      },

      handleWheel (evt) {
        if (!this.scrollableList) return
        evt.preventDefault()
        var options = this.$refs.options
        var marginTop = +window.getComputedStyle(options).marginTop.match(/-?\d+/)[0] || 0
        if (marginTop <= this.scrollMin) {
          marginTop = this.scrollMin + 1
        }
        if (marginTop >= this.scrollMax) {
          marginTop = this.scrollMax - 1
        }
        options.style.marginTop = `${marginTop - evt.deltaY}px`
      },

      onArrowClick () {
        this.showOptions = !this.showOptions
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
        padding 0 10px / 14px em
        transition all 0.2s
        position relative

        &::placeholder
          color $grey-lighter

      input
        height 34px
        width 220px
        line-height 1

      textarea
        line-height 1.5
        min-height 76px
        width 220px
        pv(5px)

      .input-errmsg
        font-size $font-size-h6
        position absolute
        left 0
        bottom -1.3em
        line-height 1
        color $state-error

      .icon-clear
        position absolute
        width 1em
        height 1em
        fill $grey-lighter
        absCenterY()
        right 8px / 14px em
        cursor pointer
        transition all 0.2s

        &:hover
          fill $grey-darker

      .input-spinner
        position absolute
        absCenterY()
        right 8px / 14px em

      .input-icon
        position absolute
        left 6px / 14px em
        top 0
        color $grey-darker
        display block
        width 1em
        height 100%
        font-size percentage(16px / 14px)

      .suggestions
        background-color $white
        display flex
        flex-direction column
        box-shadow psShadow(#000, 43%, 120, 2px, 0, 8px)
        position absolute
        min-width 100%
        top 2px + 34px
        z-index 10
        max-height 34px * 5
        overflow-y auto

        .suggestion-item
          background-color transparent
          padding 0 10px / 14px em
          color $grey-darker
          cursor pointer

          &.-active
            color $white-lighter
            background-color alpha($grey-lighter, 0.8)

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
          padding 0 10px / 14px em
          color $grey-darker
          cursor pointer

          &.-active
            color $white-lighter
            background-color alpha($grey-lighter, 0.8)

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
      right 6px / 14px em
      cursor pointer
      transition all 0.2s

      &.-reverse
        transform rotate(-180deg)

  .textarea
    .input-errmsg
      bottom -0.4em !important

    .input-spinner
      position absolute
      top auto !important
      transform none
      bottom 0.5em !important

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
      max-height 26px * 5 !important

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
      max-height 44px * 5 !important

  .-icon-clickable
    cursor pointer !important

    &:hover
      color $black-lighter !important

  .errmsg-enter-active, .errmsg-leave-active
    transition all 0.2s

  .errmsg-enter, .errmsg-leave-to
    transform translateY(-50%)
    opacity 0
    filter saturate(0%)

  .suggestions-enter-active, .suggestions-leave-active
    transition all 0.1s

  .suggestions-enter, .suggestions-leave-to
    transform translateY(-10px)
    opacity 0
    filter saturate(0%)

  .options-enter-active, .options-leave-active
    transition all 0.1s

  .options-enter, .options-leave-to
    margin-right -10px
    opacity 0
</style>
