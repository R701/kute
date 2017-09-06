<template>
  <k-container pv="36"
               flex>
    <k-container class="left"
                 w="20em"
                 ph="2em">
      <k-navigator :items="navigator"
                   :activeIndex="activeNavIndex"
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
            text: 'Group',
            href: 'group',
            ch: '组合'
          }
        ]
      }
    },

    computed: {

      activeNavIndex () {
        var matches = /\/components\/(.+)/.exec(this.$route.path)
        var key = matches && matches[1] ? matches[1] : 'color'
        return _findIndex(this.navigator, item => item.href === key)
      },

      currentTitle () {
        var activeObj = this.navigator[this.activeNavIndex]
        return `${activeObj.ch} ${activeObj.text}`
      }

    }
  }
</script>

<style lang="stylus" scoped>
</style>

