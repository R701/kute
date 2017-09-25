<template>
  <k-container pv="36"
               flex>
    <k-container class="left"
                 w="20em"
                 ph="2em">
      <keep-alive>
        <k-navigator :items="navigator"
                     :initial-toggle-indexes="[0, 1, {2: [0]}, 3, 4, 5]"
                     base-path="/components/"
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
</template>

<script>
  export default {
    data () {
      return {
        navigator: [
          {
            text: 'BASIC',
            children: [
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
              }
            ]
          },
          {
            text: 'FORM',
            children: [
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
              }
            ]
          },
          {
            text: 'VIEW',
            children: [
              {
                text: 'Container',
                children: [
                  {
                    text: 'Basic Container',
                    href: 'container',
                    ch: '基础容器'
                  },
                  {
                    text: 'Scrollable Container',
                    href: 'scrollable-container',
                    ch: '滚动容器',
                    badge: 'TODO',
                    disabled: true
                  },
                  {
                    text: 'Draggable Container',
                    href: 'draggable-container',
                    ch: '可拖动容器',
                    badge: 'TODO',
                    disabled: true
                  }
                ]
              },
              {
                text: 'Carousel',
                href: 'carousel',
                ch: '轮播',
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
              }
            ]
          },
          {
            text: 'NAVIGATION',
            children: [
              {
                text: 'Popover',
                href: 'popover',
                ch: '气泡弹出框',
                badge: 'TODO',
                disabled: true
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
              }
            ]
          },
          {
            text: 'OVERLAY',
            children: [
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
              }
            ]
          },
          {
            text: 'DATA',
            children: [
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
        ],
        initialNav: [0, 0],

        currentTitle: ''
      }
    },

    computed: {
      path () {
        var matches = /\/components\/(.+)/.exec(this.$route.path)
        var key = matches && matches[1] ? matches[1] : 'color'
        return key
      }
    },

    updated () {
      var selected = this.$refs.nav.getSelectedItem()
      if (!selected) return
      this.currentTitle = selected.text + ' ' + selected.ch
    },

    mounted () {
      /* eslint-disable no-labels */
      loop1:
      for (var i = 0, len1 = this.navigator.length; i < len1; i++) {
        var category = this.navigator[i]
        if (!category.children) continue
        for (var j = 0, len2 = category.children.length; j < len2; j++) {
          var nav = category.children[j]
          if (nav.href === this.path) {
            this.$nextTick(() => {
              this.$refs.nav.setValue([i, j])
            })
            this.currentTitle = nav.text + ' ' + nav.ch
            break loop1
          } else if (nav.children) {
            for (var k = 0, len3 = nav.children.length; k < len3; k++) {
              var nestedNav = nav.children[k]
              if (nestedNav.href === this.path) {
                this.$nextTick(() => {
                  this.$refs.nav.setValue([i, j, k])
                })
                this.currentTitle = nestedNav.text + ' ' + nestedNav.ch
                break loop1
              }
            }
          }
        }
      }
    }
  }
</script>