<template>
  <k-container pv="36"
               flex>
    <k-container class="left"
                 w="20em"
                 ph="2em">
      <k-navigator :items="navigator"
                   :value="[activeNav]"
                   base-path="/components/"
                   router></k-navigator>
    </k-container>
    <k-container class="right"
                 pr="60">
      <k-panel :header="currentTitle"
               style="position: relative">
        <k-container>
          <nuxt-child></nuxt-child>
        </k-container>
      </k-panel>
    </k-container>
  </k-container>
</template>

<script>
  import { findIndex as _findIndex } from 'lodash'
  export default {
    data () {
      return {
        navigator: [
          {
            text: 'Color',
            href: 'color',
            ch: '配色'
          },
          {
            text: 'Typography',
            href: 'typography',
            ch: '排版'
          },
          {
            text: 'Spinner',
            href: 'spinner',
            ch: '加载动画'
          },
          {
            text: 'Container',
            href: 'container',
            ch: '容器',
            badge: 'READY',
            badgeColor: '$state-warn',
            disabled: true
          },
          {
            text: 'Carousel',
            href: 'carousel',
            ch: '轮播',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, lineStyle: 'dashed', margin: '1em', color: '$grey' },
          {
            text: 'Button',
            href: 'button',
            ch: '按钮'
          },
          {
            text: 'Input',
            href: 'input',
            ch: '输入框'
          },
          {
            text: 'Select',
            href: 'select',
            ch: '选择框'
          },
          {
            text: 'Group',
            href: 'group',
            ch: '组合'
          },
          {
            text: 'Textarea',
            href: 'textarea',
            ch: '长文本输入框'
          },
          {
            text: 'Checkbox/Radio',
            href: 'checkboxradio',
            ch: '复选/单选'
          },
          {
            text: 'Switch',
            href: 'switch',
            ch: '开关',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Picker',
            href: 'picker',
            ch: '时间/日期 选择器',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Cropper',
            href: 'cropper',
            ch: '图像裁剪器',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Slider',
            href: 'slider',
            ch: '滑块',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Editor',
            href: 'editor',
            ch: '富文本编辑器',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, lineStyle: 'dashed', margin: '1em', color: '$grey' },
          {
            text: 'Popover',
            href: 'popover',
            ch: '气泡弹出框',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Panel',
            href: 'panel',
            ch: '板块'
          },
          {
            text: 'Divider',
            href: 'divider',
            ch: '分割线'
          },
          {
            text: 'Navigator',
            href: 'navigator',
            ch: '导航栏'
          },
          {
            text: 'Breadcrumbs',
            href: 'breadcrumbs',
            ch: '面包屑导航',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Tabs',
            href: 'tabs',
            ch: '标签页',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, lineStyle: 'dashed', margin: '1em', color: '$grey' },
          {
            text: 'Toast',
            href: 'toast',
            ch: '吐司提示'
          },
          {
            text: 'Notification',
            href: 'notification',
            ch: '通知'
          },
          {
            text: 'Dialog',
            href: 'dialog',
            ch: '对话框'
          },
          {
            text: 'Modal',
            href: 'modal',
            ch: '弹窗',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, lineStyle: 'dashed', margin: '1em', color: '$grey' },
          {
            text: 'List',
            href: 'list',
            ch: '列表',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Table',
            href: 'table',
            ch: '表格',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Progress',
            href: 'progress',
            ch: '进度条',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Pagination',
            href: 'pagination',
            ch: '分页',
            badge: 'TODO',
            disabled: true
          }
        ]

      }
    },

    computed: {

      path () {
        var matches = /\/components\/(.+)/.exec(this.$route.path)
        var key = matches && matches[1] ? matches[1] : 'color'
        return key
      },

      activeNav () {
        return _findIndex(this.navigator, item => item.href === this.path)
      },

      currentTitle () {
        var activeObj = this.navigator[this.activeNav]
        return `${activeObj.ch} ${activeObj.text}`
      }

    }
  }
</script>

<style lang="stylus" scoped>
</style>

