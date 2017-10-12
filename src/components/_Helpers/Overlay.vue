<template>
  <div class="floater"
       :style="{zIndex}">
    <transition :name="transition"
                @before-enter="beforeEnter"
                @enter="onEnter"
                @after-enter="afterEnter"
                @leave="onLeave"
                @after-leave="afterLeave">
      <slot v-if="mounted"></slot>
    </transition>
  </div>
</template>


<script>
  import u from '~utils'

  var zIndex = 2000

  export default {

    props: {
      transition: String,
      transitionDuration: {
        default: 500,
        type: [Number, String],
        validator (val) {
          return u.isTolerantNumber(val)
        }
      },
      stay: Boolean
    },

    data () {
      return {
        zIndex: zIndex,
        mounted: false,
        remove: function () { }
      }
    },

    computed: {
      slot () {
        return this.$slots.default[0]
      }
    },

    created () {
      zIndex++
    },

    mounted () {
      this.mounted = true
    },

    destroyed () {
      zIndex--
    },

    methods: {
      beforeEnter () {
        this.$emit('before-enter')
      },
      onEnter () {
        this.$emit('enter')
        this.slot.elm.style.transitionDuration = +this.transitionDuration / 1000 + 's'
      },
      afterEnter () {
        this.remove = this.slot.context.remove
        this.$emit('after-enter')
      },
      unmount () {
        this.$emit('before-leave')
        this.mounted = false
      },
      onLeave () {
        this.$emit('leave')
      },
      afterLeave () {
        this.remove && !this.stay && this.remove()
        this.$emit('after-leave')
      }
    }
  }
</script>
