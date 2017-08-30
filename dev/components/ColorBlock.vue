<template>
  <div class="color-block">
    <div class="block"></div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'color-block',
    props: {
      name: String
    }
  }
</script>

<style lang="stylus">
.color-block
  display flex
  flex-direction column
  height 60px
  .block
    flex 1
    box-shadow $shadow-basic
  .name
    flex 1
    text-align center
    color $grey-lighter
    font-size $font-size-h6
    line-height 30px
    text-shadow $shadow-basic
</style>


