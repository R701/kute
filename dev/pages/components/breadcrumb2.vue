<template>
  <div class="c-breadcrumbs">
    <k-breadcrumbs :data="data"></k-breadcrumbs>
    <br>
    <k-breadcrumbs :data="data"
      separator="/"></k-breadcrumbs>
    <br>
    <k-breadcrumbs :data="data"
      debug>
      <template scope="seps"
        slot="sep">
        <img src="dot.png"
          class="dot">
      </template>
    </k-breadcrumbs>
    <br>
    <k-breadcrumbs nuxt></k-breadcrumbs>
    <br>
    <k-breadcrumbs :root="{text: 'index', icon: 'global'}"></k-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
            text: '世界历史',
            href: 'http://www.baidu.com',
            icon: 'global'
          },
          {
            text: '工业革命',
            href: 'http://www.baidu.com'
          },
          {
            text: '第一次工业革命',
            href: 'http://www.baidu.com'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.c-breadcrumbs
  .dot
    width 1em
    display inline-block
    vertical-align middle
</style>
