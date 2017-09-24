<template>
  <label>
    <input type="radio"
           ref="elem"
           :checked="checked"
           :value="realValue"
           :disabled="disabled"
           @change="onChange($event)"
           v-bind="$attrs"
           v-on="$listeners">
    <span>{{label}}</span>
  </label>
</template>

<script>
  import props from './_props'
  export default {

    model: {
      prop: 'result',
      event: 'update'
    },

    inheritAttrs: false,

    props,

    computed: {
      realValue () {
        return this.value || this.label
      },

      checked () {
        return this.result == this.realValue
      }
    },

    methods: {
      onChange (evt) {
        this.$emit('update', this.realValue)
      }
    }
  }
</script>

<style scoped lang="stylus">
label
  cursor pointer
input
  vertical-align middle
span
  vertical-align middle
  padding-left .3em
  user-select none
</style>