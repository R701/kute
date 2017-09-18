<template>
  <div class="c-toast">
    <k-button @click="onDefaultClick">default</k-button>
    <k-button @click="onHideCancelClick">hide cancel</k-button>
    <k-button @click="onIconClick">icon</k-button>
    <br>
    <k-button @click="onInfoClick">info</k-button>
    <k-button @click="onSuccessClick">success</k-button>
    <k-button @click="onWarnClick">warn</k-button>
    <k-button @click="onErrorClick">error</k-button>
    <br>
    <k-button @click="onCustomClick">自定义按钮文字</k-button>
    <k-button @click="onSwitchedClick">更换主按钮</k-button>
    <k-button @click="onScrollableClick">不禁用滚动</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        const dialog = this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          onConfirm: () => {
            this.$showToast({
              message: '片单已删除'
            })
          },
          onCancel: () => {
            this.$showDialog({
              title: '确认',
              message: '是否关闭确认窗口？',
              onConfirm: () => {
                dialog.close()
              }
            })

            return true
          },
          onClose: () => {
            this.$showToast({
              message: '已关闭'
            })
          }
        })
      },

      onHideCancelClick () {
        this.$showDialog({
          title: '请确认',
          message: '取消按钮被隐藏了。🌚🌚🌚🌚🌚🌚',
          hideCancelButton: true
        })
      },

      onIconClick () {
        this.$showDialog({
          title: '请确认',
          message: '看到对话框标题旁边的ICON了吗？那是可以自定义的🌚🌚🌚🌚🌚🌚',
          icon: 'attention',
          iconSize: '26px'
        })
      },

      onInfoClick () {
        this.$showDialog({
          title: '请确认',
          message: 'Info 是默认的状态色',
          state: 'info'
        })
      },

      onSuccessClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          state: 'success'
        })
      },

      onWarnClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          state: 'warn'
        })
      },

      onErrorClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          state: 'error'
        })
      },

      onCustomClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          confirmText: 'Yeah',
          cancelText: 'Nah'
        })
      },

      onSwitchedClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          primaryButton: 'cancel'
        })
      },

      onScrollableClick () {
        this.$showDialog({
          title: '请确认',
          message: '该操作不可撤销，确认要删除这个片单吗？',
          freezeScreen: false
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
