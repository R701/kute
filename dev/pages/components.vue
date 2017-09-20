<template>
  <k-container pv="36"
               flex>
    <k-container class="left"
                 w="20em"
                 ph="2em">
      <k-navigator :items="navigator"
                   :value="activeNav"
                   base-path="/components/"
                   router></k-navigator>
    </k-container>
    <k-container class="right"
                 pr="60">
      <k-panel :header="currentTitle">
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
            text: 'Panel',
            href: 'panel',
            ch: '板块'
          },
          {
            text: 'Navigator',
            href: 'navigator',
            ch: '导航条'
          },
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

