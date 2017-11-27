<template>
  <div v-show="active">
    <slot>
    </slot>
  </div>
</template>

<script>
  import { pane as props } from './_props'
  export default {
    props,
    computed: {
      active () {
        return this.$parent.priCurrentKey === this.tabKey
      }
    }
  }
</script>