<template>
  <div class="c-switch">
    <k-switch v-model="checked"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <k-switch v-model="checked" disabled></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <br><br>
    <k-switch v-model="checked" state="success"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <br><br>
    <k-switch v-model="checked" state="warn"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <br><br>
    <k-switch v-model="checked" state="error"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <br><br>
    <k-switch v-model="checked" size="small"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <k-switch v-model="checked"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <k-switch v-model="checked" size="large"></k-switch>
    <span>{{checked ? '开' : '关'}}</span>
    <br><br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked: true
      }
    }
  }
</script>

<style lang="stylus">
.c-switch
  .switch
    margin-right .5em
  span
    vertical-align middle
    display inline-block
    margin-right 1em
</style>

