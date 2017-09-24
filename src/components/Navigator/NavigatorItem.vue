<template>
  <div :class="['navigator-item', { '-active': active || showChildren, '-parent': isParent, '-toggled': showChildren, '-disabled': disabled }]">
    <component :is="tag"
               :to="fullHref"
               :href="fullHref"
               :target="blank ? '_blank' : '_self'"
               :event="preventDefault || disabled ? '' : 'click'"
               @click.stop="onClick">
      <i :class="['navigator-item-icon', `${config$.iconClassPrefix}${icon}`]"
         v-if="icon"></i>
      <span v-if="icon || badge">{{text}}</span>
      <template v-else>{{text}}</template>
      <span class="navigator-item-badge"
            v-if="badge"
            ref="badge">{{badge}}</span>
    </component>
    <transition name="children"
                v-if="children">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
  import linkable from '~mixins/linkable'
  import withIcon from '~mixins/with-icon'

  import Navigator from './Navigator'
  import { itemProps } from './_props'

  import u from '~utils'

  export default {
    mixins: [linkable, withIcon],

    components: { Navigator },

    props: itemProps,

    computed: {
      tag () {
        return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a'
      },

      level () {
        return this.$parent ? this.$parent.level : 0
      },

      isParent () {
        return Array.isArray(this.children)
      }
    },

    mounted () {
      if (this.badgeColor && this.badge) {
        this.$refs.badge.style.backgroundColor = u.getCSSColor(this.badgeColor)
      }
    },

    methods: {
      onClick (evt) {
        if (this.preventDefault) {
          evt.preventDefault()
        }
        if (this.disabled) return

        this.$emit('item-click', this.index, this.isParent)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.children-enter-active, .children-leave-active {
  transition all .2s $ease-out-quint
}
.children-enter, .children-leave-to {
  transform-origin 0 0
  transform translateY(-1.5em)
  opacity 0
}
</style>
