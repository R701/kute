<template>
  <div class="c-loading">
    <k-button @click="onDefaultClick">default</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        this.$startLoading()
        setTimeout(() => {
          this.$stopLoading()
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button
    margin-bottom 1.5em
    margin-left 0 !important
    margin-right 15px

    &:last-child
      margin-right 0
</style>
