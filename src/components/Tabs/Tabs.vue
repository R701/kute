<script>
  /* eslint-disable */
  import TabNav from './TabNav'
  /* eslint-enable */
  export default {
    props: {
      defaultActiveKey: {
        type: null
      },
      currentKey: {
        type: null
      },
      type: {
        type: String,
        default: 'default'
      },
      width: {
        type: String,
        default: '250px'},
      gap: {
        type: String,
        default: '5px'}
    },
    data () {
      return { priCurrentKey: 2 }
    },
    created () {
      this.priCurrentKey = this.defaultActiveKey || this.$slots.default[0].componentOptions.propsData['tabKey']
    },
    methods: {
      handleUpdate (key) {
        this.$emit('keyChanged', key)
        this.priCurrentKey = key
      }
    },
    updated () {
      if (this.currentKey) {
        this.priCurrentKey = this.currentKey
      }
    },
    render () {
      const panes = this.$slots.default.map(i => i.componentOptions.propsData)
      const data = {
        props: {
          panes: panes,
          activeKey: this.priCurrentKey,
          width: this.width,
          gap: this.gap
        }
      }
      return (
        <div class={`-${this.type} tabs`}>
          <TabNav {...data} onUpdateActiveKey={i => this.handleUpdate(i)}></TabNav>
          <div class="tabs-content">{this.$slots.default}</div>
        </div>
      )
    }
  }
</script>

<style lang="stylus" scoped>
</style>
