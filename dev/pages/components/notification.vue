<template>
  <div class="c-toast">
    <k-button @click="onDefaultClick">default</k-button>
    <k-button @click="onClosableClick">closable</k-button>
    <k-button @click="onIconClick">icon</k-button>
    <br>
    <k-button @click="onInfoClick">info</k-button>
    <k-button @click="onSuccessClick">success</k-button>
    <k-button @click="onWarnClick">warn</k-button>
    <k-button @click="onErrorClick">error</k-button>
    <k-button @click="onCallbackClick">callback</k-button>
    <br>
    <k-button @click="onLinkClick">link</k-button>
    <k-button @click="onRouterLinkClick">router link</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        this.$notify({
          message: '发布成功'
        })
      },

      onClosableClick () {
        this.$notify({
          message: '发布成功',
          closable: true,
          duration: 0
        })
      },

      onIconClick () {
        this.$notify({
          message: '操作请谨慎',
          icon: 'attention',
          iconSize: '19px'
        })
      },

      onInfoClick () {
        this.$notify({
          message: '正在发布',
          state: 'info'
        })
      },

      onSuccessClick () {
        this.$notify({
          message: '发布成功',
          state: 'success'
        })
      },

      onWarnClick () {
        this.$notify({
          message: '网络较慢',
          state: 'warn'
        })
      },

      onErrorClick () {
        this.$notify({
          message: '发布失败',
          state: 'error'
        })
      },

      onCallbackClick () {
        this.$notify({
          message: '等待后成功',
          state: 'info',
          loading: true,
          onClose: () => {
            this.onSuccessClick()
          }
        })
      },

      onLinkClick () {
        this.$notify({
          message: '点击跳转到百度',
          blank: true,
          href: 'http://www.baidu.com/'
        })
      },

      onRouterLinkClick () {
        this.$notify({
          message: '点击跳转到配色页',
          nuxt: true,
          href: 'color'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

.button
  margin-bottom 1.5em
  margin-left 0 !important
  margin-right 15px
  &:last-child
    margin-right 0
</style>
