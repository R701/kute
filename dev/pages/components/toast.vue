<template>
  <div class="c-toast">
    <k-button @click="onDefaultClick">default</k-button>
    <k-button @click="onClosableClick">closable</k-button>
    <k-button @click="onLoadingClick">loading</k-button>
    <k-button @click="onLoadingMessageClick">loading message</k-button>
    <k-button @click="onInfoClick">info</k-button>
    <k-button @click="onSuccessClick">success</k-button>
    <k-button @click="onWarnClick">warn</k-button>
    <k-button @click="onErrorClick">error</k-button>
    <k-button @click="onCallbackClick">callback</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        this.$showToast({
          message: '发布成功'
        })
      },

      onClosableClick () {
        this.$showToast({
          message: '发布成功',
          closable: true,
          duration: 0
        })
      },

      onLoadingClick () {
        this.$showToast({
          loading: true,
          duration: 10000
        })
      },

      onLoadingMessageClick () {
        this.$showToast({
          loading: true,
          message: '请稍等',
          duration: 10000
        })
      },

      onInfoClick () {
        this.$showToast({
          message: '正在发布',
          state: 'info'
        })
      },

      onSuccessClick () {
        this.$showToast({
          message: '发布成功',
          state: 'success'
        })
      },

      onWarnClick () {
        this.$showToast({
          message: '网络较慢',
          state: 'warn'
        })
      },

      onErrorClick () {
        this.$showToast({
          message: '发布失败',
          state: 'error'
        })
      },

      onCallbackClick () {
        this.$showToast({
          message: '等待后成功',
          state: 'info',
          loading: true,
          onClose: () => {
            this.onSuccessClick()
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.c-toast
  display flex
  flex-flow row wrap
  align-content flex-start
  // justify-content flex-start

.button
  margin-bottom 1.5em
  margin-left 0 !important
  margin-right 15px
  &:last-child
    margin-right 0
</style>
