<template lang="html">
  <div v-show="active">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    created () {
    },
    props: {
      tabKey: String,
      label: String,
      disabled: Boolean
    },
    computed: {
      active () {
        return this.$parent.currentKey === this.tabKey
      }
    }

  }
</script>

<style lang="css">

</style>
