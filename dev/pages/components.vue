<template>
  <k-container>
    <k-container pl="2em"
      class="header"
      pv="30">
      <k-breadcrumbs :data="breadcrumbs"
        nuxt />
    </k-container>
    <k-container pv="36"
      flex>
      <k-container class="left"
        w="20em"
        ph="2em">
        <keep-alive>
          <k-navigator :items="navigator"
            style="margin-top: -1em"
            base-path="/components/"
            badge-color="$grey-darker"
            router
            ref="nav"></k-navigator>
        </keep-alive>
      </k-container>
      <k-container class="right"
        pr="60">
        <k-panel :header="currentTitle"
          style="position: relative">
          <k-container>
            <keep-alive>
              <nuxt-child></nuxt-child>
            </keep-alive>
          </k-container>
        </k-panel>
      </k-container>
    </k-container>
  </k-container>
</template>

<script>
  export default {
    data () {
      this.setNav()
      return {
        breadcrumbs: [
          {
            text: 'Home',
            icon: 'home',
            href: '/'
          },
          {
            text: 'Components',
            href: '/components'
          }
        ],
        navigator: [
          { divider: true, color: '$grey', margin: '2em', text: 'Basic' },
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
          { divider: true, color: '$grey', margin: '2em', text: 'Form' },
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
            ch: '开关'
          },
          {
            text: 'Slider',
            href: 'slider',
            ch: '滑块'
          },
          {
            text: 'Picker',
            href: 'picker',
            ch: '时间/日期 选择器',
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
          { divider: true, color: '$grey', margin: '2em', text: 'View' },
          {
            text: 'Basic Container',
            href: 'container',
            ch: '基础容器'
          },
          {
            text: 'Scrollable Container',
            href: 'scrollable-container',
            ch: '滚动容器'
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
            text: 'Carousel',
            href: 'carousel',
            ch: '轮播',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, color: '$grey', margin: '2em', text: 'Navigation' },
          {
            text: 'Popover',
            href: 'popover',
            ch: '气泡弹出框'
          },
          {
            text: 'Navigator',
            href: 'navigator',
            ch: '导航栏'
          },
          // {
          //   text: 'Breadcrumb',
          //   href: 'breadcrumb',
          //   ch: '面包屑导航'
          // },
          {
            text: 'Breadcrumb',
            href: 'breadcrumb2',
            ch: '面包屑导航'
          },
          {
            text: 'Tabs',
            href: 'tabs',
            ch: '标签页'
          },
          {
            text: 'Pagination',
            href: 'pagination',
            ch: '分页',
            badge: 'TODO',
            disabled: true
          },
          { divider: true, color: '$grey', margin: '2em', text: 'Overlay' },
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
            ch: '弹窗'
          },
          {
            text: 'Drawer',
            href: 'drawer',
            ch: '抽屉',
            badge: 'TODO',
            disabled: true
          },
          {
            text: 'Loading',
            href: 'loading',
            ch: '加载遮罩'
          },
          { divider: true, color: '$grey', margin: '2em', text: 'Data' },
          {
            text: 'Progress',
            href: 'progress',
            ch: '进度条'
          },
          {
            text: 'List',
            href: 'list',
            ch: '列表'
          },
          {
            text: 'Table',
            href: 'table',
            ch: '表格',
            badge: 'TODO',
            disabled: true
          }
        ],
        initialNav: [0],
        currentTitle: ''
      }
    },

    computed: {
      path () {
        var path
        if (this.$route && this.$route.path) {
          path = this.$route.path
        } else if (window) {
          path = window.location.pathname
        }
        var matches = /\/components\/([\w]+)/.exec(path)
        var key = matches && matches[1] ? matches[1] : 'color'
        return key
      }
    },

    mounted () {
      this.setNav()
    },

    methods: {
      setNav () {
        if (!this.navigator) return
        /* eslint-disable no-labels */
        loop1: for (var i = 0, len1 = this.navigator.length; i < len1; i++) {
          var category = this.navigator[i]
          if (!category.children) {
            if (category.href === this.path) {
              this.$nextTick(() => {
                this.$refs.nav.setValue([i])
                this.currentTitle = category.text + ' ' + category.ch
              })
              break
            } else {
              continue
            }
          }
          for (var j = 0, len2 = category.children.length; j < len2; j++) {
            var nav = category.children[j]
            if (nav.href === this.path) {
              this.$nextTick(() => {
                this.$refs.nav.setValue([i, j])
                this.currentTitle = nav.text + ' ' + nav.ch
              })
              break loop1
            } else if (nav.children) {
              for (var k = 0, len3 = nav.children.length; k < len3; k++) {
                var nestedNav = nav.children[k]
                if (nestedNav.href === this.path) {
                  this.$nextTick(() => {
                    this.$refs.nav.setValue([i, j, k])
                    this.currentTitle = nestedNav.text + ' ' + nestedNav.ch
                  })
                  break loop1
                }
              }
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.header
  background $black-darker
  box-shadow $shadow-basic
</style>
