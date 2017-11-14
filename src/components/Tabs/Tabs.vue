<template>
  <div :class="`tabs -${this.type}`">
    <tab-nav :panes="panesProps"
      :active-key="priCurrentKey"
      :width="width"
      :gap="gap"
      @active-change="handleUpdate"></tab-nav>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  import TabNav from './TabNav'
  import { main as props } from './_props'
  export default {
    components: {
      TabNav
    },
    props,
    data () {
      return {
        priCurrentKey: null,
        panesProps: null
      }
    },

    watch: {
      currentKey (val) {
        this.priCurrentKey = val
      }
    },
    created () {
      this.priCurrentKey = this.defaultActiveKey || this.$slots.default[0].componentOptions.propsData['tabKey']
      this.panesProps = this.$slots.default.map(i => i.componentOptions.propsData)
    },
    methods: {
      handleUpdate (key) {
        this.$emit('keyChanged', key)
        this.priCurrentKey = key
      }
    }
  }
</script>