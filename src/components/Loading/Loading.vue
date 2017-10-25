<template>
  <overlay transition="fade"
    transition-duration="300"
    ref="overlay"
    @enter="maskEnter">
    <div :class="['mask', {'-local': local}]"
      ref="mask">
      <transition name="fade"
        @enter="onLoadingEnter"
        @after-leave="afterLoadingLeave">
        <div :class="['loading', {'-freezing': freezeScreen}]"
          v-if="entered">
          <div class="bar-wrapper"
            v-if="bar"
            :style="{width: `${240 * scale}px`}">
            <k-progress size="small"
              :percent="progress"
              v-bind="$attrs"></k-progress>
          </div>
          <k-spinner v-else
            rainbow
            :d="100 * scale"
            :stroke-width="3"
            v-bind="$attrs"></k-spinner>
          <div class="message"
            v-if="message">{{_message}}</div>
        </div>
      </transition>
    </div>
  </overlay>
</template>

<script>
  import overlaying from '~mixins/overlaying'
  import KSpinner from '~components/Spinner/Spinner'
  import KProgress from '~components/Progress/Progress'

  import props from './_props'

  export default {
    props,
    mixins: [overlaying],

    components: {
      KSpinner,
      KProgress
    },

    inheritAttrs: false,

    data () {
      return {
        entered: false,
        innerMessage: '',
        progress: 0
      }
    },

    computed: {
      _message () {
        if (this.innerMessage !== null && this.innerMessage !== undefined) {
          return this.innerMessage
        } else {
          return this.config$.defaultLoadingMessage
        }
      }
    },

    mounted () {
      this.innerMessage = this.message
      var interval
      if (this.autoProgress) {
        interval = setInterval(() => {
          if (this.progress > 55) {
            clearInterval(interval)
            interval = setInterval(() => {
              if (this.progress > 75) {
                clearInterval(interval)
                interval = setInterval(() => {
                  if (this.progress >= 99) {
                    clearInterval(interval)
                  } else {
                    this.progress++
                  }
                }, 300)
              } else {
                this.progress++
              }
            }, 200)
          } else {
            this.progress++
          }
        }, 100)
      }
    },

    methods: {
      close () {
        if (this.bar) {
          this.progress = 100
          setTimeout(() => {
            this.entered = false
          }, 500)
        } else {
          this.entered = false
        }
      },

      afterLoadingLeave () {
        if (this.freezeScreen && !document.querySelector('.loading.-freezing')) {
          document.documentElement.style.overflow = 'initial'
        }
        this.$refs.overlay.unmount()
      },

      maskEnter () {
        this.entered = true
        if (this.freezeScreen && !this.local) {
          document.documentElement.style.overflow = 'hidden'
        }
      },

      onLoadingEnter () {
        // ref here
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .loading
    absCenter()
    transition-duration 0.1s

    .bar-wrapper
      width 240px

    .message
      padding 10px
      margin-top 15px
      text-align center
</style>

