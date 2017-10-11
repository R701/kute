<template>
  <div class="c-slider">
    <k-checkbox :checked.sync="step">step: 0.5</k-checkbox>
    <k-checkbox :checked.sync="precision">precision: 2</k-checkbox>
    <k-checkbox :checked.sync="disabled">disabled</k-checkbox>
    <k-checkbox :checked.sync="tip">tip</k-checkbox>
    <k-checkbox :checked.sync="hint">hint</k-checkbox>
    <k-checkbox :checked.sync="annotated">annotated</k-checkbox>
    <span>value: {{value}}</span>
    <br><br>
    <k-slider v-model="value"
              :length="500"
              :max="9"
              :min="0"
              :step="step ? 0.5 : null"
              :hint="hint"
              :tip="tip"
              :disabled="disabled"
              :annotated="annotated"
              :precision="precision ? 2 : null"></k-slider>
    <br><br>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 6,
        disabled: false,
        hint: true,
        tip: false,
        annotated: false,
        precision: false,
        step: true
      }
    }
  }
</script>

<style lang="stylus">
  .c-slider
    .checkbox
      margin-right 1.5em
</style>

