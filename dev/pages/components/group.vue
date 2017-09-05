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
  </div>
</template>

<script>
  import NamedBlock from '@/components/NamedBlock'
  export default {
    components: {
      NamedBlock
    }
  }
</script>

<style lang="stylus">

</style>


