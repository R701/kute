<template>
  <div :class="['panel', { '-plain': plain }]"
       :style="{backgroundColor: bgValue}">
    <div class="panel-head"
         v-if="$slots.head || header"
         @click="onHeaderClick">
      <slot name="head"
            v-if="$slots.head"></slot>
      <h2 class="title"
          v-else>{{header}}</h2>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-foot"
         v-if="$slots.foot">
      <slot name="foot"
            v-if="$slots.foot"></slot>
    </div>
  </div>
</template>

<script>
  import props from './_props'
  import u from '~utils'
  export default {
    props,

    computed: {
      bgValue () {
        if (this.backgroundColor) {
          return u.getCSSColor(this.backgroundColor)
        } else {
          return u.getCSSColor('$black-lighter')
        }
      }
    },

    methods: {
      onHeaderClick () { }
    }
  }
</script>


<style lang="stylus" scoped>
  @require '~object/layout'

  $panel-padding = 28px

  .panel
    box-shadow $shadow-material
    border-radius 4px
    background-color $black-lighter

    &-head
      pv 28px
      border-bottom 1px solid $grey-darker

      ~/.-plain &
        border 0
        padding-bottom 0

    &-body
      pv 28px

    &-foot
      pv 18px
      border-top 1px solid $grey-darker

      ~/.-plain &
        border 0
        padding-top 0

  .panel
    &-head, &-body, &-foot
      ph $panel-padding
</style>

