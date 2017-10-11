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
    <named-block name='default'
                 position="right">
      <k-slider v-model="value"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
    <named-block name='length="500"'
                 position="right">
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
    </named-block>
    <br><br>
    <named-block name='state="success"'
                 position="right">
      <k-slider v-model="value"
                state="success"
                :length="500"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
    <named-block name='state="warn"'
                 position="right">
      <k-slider v-model="value"
                state="warn"
                :length="500"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
    <named-block name='state="error"'
                 position="right">
      <k-slider v-model="value"
                state="error"
                :length="500"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
    <named-block name='line-color="$theme-secondary"'
                 position="right">
      <k-slider v-model="value"
                line-color="$theme-secondary"
                :length="500"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
    <named-block name='line-color="["$state-error", "$state-success"]"'
                 position="right">
      <k-slider v-model="value"
                :line-color="['$state-error', '$state-success']"
                :length="500"
                :max="9"
                :min="0"
                :step="step ? 0.5 : null"
                :hint="hint"
                :tip="tip"
                :disabled="disabled"
                :annotated="annotated"
                :precision="precision ? 2 : null"></k-slider>
    </named-block>
    <br><br>
  </div>
</template>

<script>
  import NamedBlock from '@/components/NamedBlock'
  export default {
    components: {
      NamedBlock
    },
    data () {
      return {
        value: 6,
        disabled: false,
        hint: false,
        tip: true,
        annotated: false,
        precision: true,
        step: false
      }
    }
  }
</script>

<style lang="stylus">
  .c-slider
    .checkbox
      margin-right 1.5em

    .right .named-block-name
      margin-left 32px
</style>

