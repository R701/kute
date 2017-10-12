<template>
  <overlay transition="fade"
           transition-duration="300"
           ref="overlay"
           @enter="maskEnter">
    <div class="mask"
         ref="mask">
      <transition name="fade"
                  @enter="onLoadingEnter"
                  @after-leave="afterLoadingLeave">
        <div :class="['loading', {'-freezing': freezeScreen}]"
             v-if="entered">
          <k-spinner rainbow
                     d="100"
                     :stroke-width="3"
                     v-bind="$attrs"></k-spinner>
          <div class="message">{{message}}</div>
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
        entered: false
      }
    },

    methods: {
      close () {
        this.entered = false
      },

      afterLoadingLeave () {
        if (this.freezeScreen && !document.querySelector('.loading.-freezing')) {
          document.documentElement.style.overflow = 'initial'
        }
        this.$refs.overlay.unmount()
      },

      maskEnter () {
        this.entered = true
        if (this.freezeScreen) {
          document.documentElement.style.overflow = 'hidden'
        }

        if (this.timeout) {
          setTimeout(() => {
            this.close()
          }, this.timeout)
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

    .message
      padding 10px
</style>

