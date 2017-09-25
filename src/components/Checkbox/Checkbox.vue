<template>
  <label>
    <input type="checkbox"
           ref="elem"
           :checked="containedInArr"
           :value="realValue"
           :disabled="disabled"
           @change="onChange"
           v-bind="$attrs"
           v-on="$listeners">
    <span v-if="label">{{label}}</span>
    <span v-else>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import props from './_props'

  export default {

    model: {
      prop: 'arr',
      event: 'update'
    },

    props,

    computed: {
      containedInArr () {
        return (this.arr && this.arr.indexOf(this.realValue) >= 0) || this.checked
      },

      realValue () {
        return this.value || this.label
      }
    },

    methods: {
      onChange (evt) {
        var newArr = this.arr.slice(0)
        this.$emit('update:checked', !this.containedInArr)
        if (this.containedInArr) {
          newArr.splice(this.arr.indexOf(this.realValue), 1)
        } else {
          newArr.push(this.realValue)
        }
        this.$emit('update', newArr)
        this.$emit('change', evt)
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