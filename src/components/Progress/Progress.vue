<template lang="html">
  <div class="progress-container">
    <div class="progress-bar">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
  .progress
    &-container
      height:20px
      background:white
      rounded()
    &-bar
      background:$state-success
      width:20px
      height:100%
</style>
