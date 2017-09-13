<template>
  <div class="navigator">
    <div :class="['navigator-item', { 'active': activeIndex === index }]"
         v-for="(item, index) in items"
         :key="index">
      <component :is="tag"
                 :to="basePath + item.href"
                 :href="basePath + item.href"
                 :target="blank ? '_blank' : '_self'"
                 @click="onItemClick($event, item, index)">
        {{item.text}}
      </component>
    </div>
  </div>
</template>

<script>
  import props from './_props'

  export default {
    props,

    computed: {
      tag () {
        return this.nuxt ? 'nuxt-link' : this.router ? 'router-link' : 'a'
      }
    },

    methods: {
      onItemClick (evt, item, index) {
        if (this.preventDefault) {
          evt.preventDefault()
        }

        this.$emit('item-click', item, index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .navigator-item
    color white
    margin-bottom 4px
    position relative
    padding-left 1em
    line-height 2
    cursor pointer
    a
      color inherit
      vertical-align middle
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
    &.active
      color $theme-primary-lighter
      &:before
        content ' '
        border 3px solid $theme-secondary
        width .7em
        height .7em
        background-color transparent
        left -.4em
        top: .7em
        transform: rotate(-45deg)
        border-top: 0
        border-left: 0

</style>

