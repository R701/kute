<template>
  <div class="c-group">
    <k-group>
      <k-button state="info">接受</k-button>
      <k-button>待定</k-button>
      <k-button>拒绝</k-button>
    </k-group>
    <br>
    <k-group vertical>
      <k-button state="info">接受</k-button>
      <k-button>待定</k-button>
      <k-button>拒绝</k-button>
    </k-group>
    <br>
    <k-group vertical
             style="width: 5em">
      <k-button state="info">接受</k-button>
      <k-button>待定</k-button>
      <k-button>拒绝</k-button>
    </k-group>
    <br>
    <k-group>
      <k-input placeholder="输入关键字"></k-input>
      <k-button>查询</k-button>
    </k-group>
    <br>
    <k-group>
      <k-input placeholder="City"
               :options="options"
               select></k-input>
      <k-input placeholder="Street"></k-input>
    </k-group>
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
        options: [
          { text: '龙岩', value: 'ly' },
          { text: '厦门', value: 'xm' },
          { text: '深圳', value: 'sz' },
          { text: '上海', value: 'sh' }
        ]
      }
    }
  }
</script>

<style lang="stylus">

</style>


