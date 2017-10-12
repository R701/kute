<template>
  <div class="c-loading">
    <k-button @click="onDefaultClick">默认</k-button>
    <k-button @click="onMessageClick">自定义文字</k-button>
    <k-button @click="onDynamicMessageClick">自定义动态文字</k-button>
    <k-button @click="onTimeoutClick">定时关闭</k-button>
    <k-button @click="onScrollableClick">允许窗口滑动</k-button>
    <br>
    <k-button @click="onBarClick">进度条</k-button>
    <k-button @click="onBarTimeoutClick">定时关闭进度条</k-button>
    <k-button @click="onBarAutoClick">自动进度条</k-button>
    <k-button @click="onBarAutoTimeoutClick">定时关闭自动进度条</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        this.$startLoading()
        setTimeout(() => {
          this.$stopLoading()
        }, 3000)
      },

      onMessageClick () {
        this.$startLoading({
          message: 'I\'m trying. Please just wait a moment.'
        })
      },

      onDynamicMessageClick () {
        var count = 10
        var loading = this.$startLoading()
        loading.innerMessage = '倒计时：' + count
        var interval = setInterval(() => {
          count--
          if (count <= 0) {
            clearInterval(interval)
            this.$stopLoading()
          }
          loading.innerMessage = '倒计时：' + count
        }, 1000)
      },

      onTimeoutClick () {
        this.$startLoading({
          timeout: 5000,
          onTimeout: () => {
            alert('time out!')
          }
        })
      },

      onScrollableClick () {
        this.$startLoading({
          freezeScreen: false
        })
        setTimeout(() => {
          this.$stopLoading()
        }, 3000)
      },

      onBarClick () {
        var loading = this.$startLoading({
          bar: true,
          message: '进度条，自己控制进度'
        })
        loading.progress = 10
        var interval = setInterval(() => {
          loading.progress += 1
          if (loading.progress > 100) {
            clearInterval(interval)
            this.$stopLoading()
          }
        }, 100)
      },

      onBarTimeoutClick () {
        var loading = this.$startLoading({
          bar: true,
          message: '进度条，自己控制进度',
          timeout: 3000
        })
        loading.progress = 10
        var interval = setInterval(() => {
          loading.progress += 1
          if (loading.progress > 100) {
            clearInterval(interval)
            this.$stopLoading()
          }
        }, 100)
      },

      onBarAutoClick () {
        var loading = this.$startLoading({
          bar: true,
          autoProgress: true,
          timeout: 12000,
          onProgress: (progress) => {
            loading.innerMessage = '已加载：' + progress + '%'
          }
        })
      },

      onBarAutoTimeoutClick () {
        var loading = this.$startLoading({
          bar: true,
          autoProgress: true,
          timeout: 3000,
          onProgress: (progress) => {
            loading.innerMessage = '已加载：' + progress + '%'
          }
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
