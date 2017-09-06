<template>
  <div class="c-button">
    <k-container flex>
      <named-block name="default">
        <k-button>确认</k-button>
      </named-block>
      <named-block name="primary">
        <k-button state="primary">确认</k-button>
      </named-block>
      <named-block name="info">
        <k-button state="info">确认</k-button>
      </named-block>
      <named-block name="success">
        <k-button state="success">确认</k-button>
      </named-block>
      <named-block name="warn">
        <k-button state="warn">确认</k-button>
      </named-block>
      <named-block name="error">
        <k-button state="error">确认</k-button>
      </named-block>
    </k-container>
    <br>
    <k-container flex>
      <named-block name="disabled">
        <k-button disabled>无法使用</k-button>
      </named-block>
      <named-block name="loading">
        <k-button loading>等待</k-button>
      </named-block>
      <named-block name="link">
        <k-button href="http://www.baidu.com"
                  target="_blank">百度</k-button>
      </named-block>
      <named-block name="nuxt">
        <k-button href="/components/color"
                  nuxt>color</k-button>
      </named-block>
      <named-block name="ghost">
        <k-button ghost>确认</k-button>
      </named-block>
      <named-block name="icon share">
        <k-button icon="share">分享</k-button>
      </named-block>
    </k-container>
    <br>
    <k-container flex>
      <named-block name="small">
        <k-button state="primary"
                  size="small">确认</k-button>
      </named-block>
      <named-block name="default size">
        <k-button state="primary">确认</k-button>
      </named-block>
      <named-block name="large">
        <k-button state="primary"
                  size="large">确认</k-button>
      </named-block>
    </k-container>
    <br>
    <named-block name="block">
      <k-button state="primary"
                block>确认</k-button>
    </named-block>
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
.named-block
  margin-right 16px
.c-button .named-block._block .named-block-main
  width 100%
</style>


