<template>
  <div class="navigator">
    <div :class="['navigator-item', { '-active': isActive(index), '-parent': isParent(item) }]"
         v-for="(item, index) in items"
         :key="index">
      <component :is="tag"
                 :to="basePath + item.href"
                 :href="basePath + item.href"
                 :target="blank ? '_blank' : '_self'"
                 @click="onItemClick($event, item, index)">
        <i :class="['navigation-item-icon', `${config$.iconClassPrefix}${item.icon}`]"
           v-if="item.icon"></i>
        <span>{{item.text}}</span>
      </component>
      <transition name="children"
                  v-if="item.children">
        <k-navigator v-show="isActive(index)"
                     :parent="item"
                     :parent-index="index"
                     :items="item.children"
                     v-model="childrenValue"
                     :router="router"
                     :nuxt="nuxt"
                     :base-path="basePath"
                     :blank="blank"
                     :prevent-default="preventDefault"
                     @item-click="onChildClick"
                     :level="level + 1">
        </k-navigator>
      </transition>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import linkable from '~mixins/linkable'

  export default {
    props,

    mixins: [linkable],

    model: {
      prop: 'value',
      event: 'update:value'
    },

    name: 'k-navigator',

    data () {
      return {
        childrenValue: null
      }
    },

    computed: {
      tag () {
        return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a'
      }
    },

    watch: {
      value: function (val, oldVal) {
        if ([val, oldVal].every(v => !v && v !== 0)) return
        var copy
        // this level is removed
        var condition1 = Array.isArray(val) && typeof val[this.level] !== 'number' && typeof val[this.level + 1] === 'number'
        // this level is changed
        var condition2 = Array.isArray(val) && Array.isArray(oldVal) && this.isNumber(val[this.level]) && this.isNumber(oldVal[this.level]) && val[this.level] !== oldVal[this.level]

        if (condition1 || condition2) {
          copy = val.slice(0)
          if (copy) {
            delete copy[this.level + 1]
            val = copy
          }
        }

        this.childrenValue = val
      },

      childrenValue: function (val, oldVal) {
        if ([val, oldVal].every(v => !v && v !== 0)) return
        this.$emit('update:value', this.processBeforeSync(val))
      }
    },

    mounted () {
      this.childrenValue = this.value
    },

    methods: {
      isActive (index) {
        return (Array.isArray(this.value) && this.value[this.level] === index) || (this.level === 0 && this.value === index)
      },

      isParent (item) {
        return Array.isArray(item.children)
      },

      isNumber (n) {
        return typeof n === 'number' && !isNaN(n)
      },

      onItemClick (evt, item, index) {
        if (this.preventDefault) {
          evt.preventDefault()
        }

        evt.stopPropagation()

        var value = Array.isArray(this.value) ? this.value.slice(0) : typeof this.value === 'number' ? [this.value] : []
        if (this.isParent(item) && this.isActive(index)) {
          delete value[this.level]
        } else {
          value[this.level] = index
        }
        this.$emit('update:value', this.processBeforeSync(value))

        this.$emit('item-click', item, index, this.level, this.parent, this.parentIndex)
      },

      onChildClick (item, index, level, parent, parentIndex) {
        this.$emit('item-click', item, index, level, parent, parentIndex)
      },

      processBeforeSync (value) {
        var v = value && value.length && value.length === 1 ? value[0] : value
        if (Array.isArray(v) && v.every(item => (item !== 0 && !item))) {
          return null
        }
        /* eslint-disable no-unmodified-loop-condition */
        while (v && v.length) {
          var last = v[v.length - 1]
          if (!last && last !== 0) {
            v.pop()
          } else break
        }
        return v
      }
    }
  }
</script>

<style lang="stylus" scoped>
.navigator
  position relative
  .navigator-item
    color white
    margin-bottom 4px
    position relative
    padding-left 1em
    line-height 2
    cursor pointer
    i, span
      vertical-align middle
      display inline-block
    i
      margin-right 5px
    a
      color inherit
      vertical-align middle
      display inline-block
      width 100%
      height 100%
    &:before
      content ' '
      display block
      width 3px
      height 1.2em
      border-radius 1.5px
      position absolute
      top .5em
      left 0
      background-color $grey
      transition all .2s
    &:hover
      &:before
        background-color $theme-secondary
    &.-active
      color $theme-primary-lighter
      &:before
        content ' '
        border 3px solid $theme-secondary
        width .7em
        height .7em
        background-color transparent
        left -.3em
        top: .7em
        transform: rotate(-45deg)
        border-top: 0
        border-left: 0
      &.-parent
        &:before
          transform: rotate(45deg)
          top: .6em

.children-enter-active, .children-leave-active {
  transition: all .2s $ease-out-quint
}
.children-enter, .children-leave-to {
  transform-origin 0 0
  transform: translateY(-1.5em)
  opacity: 0
}
</style>

