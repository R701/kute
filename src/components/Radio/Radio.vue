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
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
span
  vertical-align middle
  padding-left .3em
  user-select none
</style>