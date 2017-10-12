<template>
  <div class="c-modal">
    <div class="btns">
      <k-button @click="modal1 = true">最简单</k-button>
      <k-button @click="modal5 = true">隐藏关闭按钮</k-button>
      <k-button @click="modal6 = true">点击空白处关闭</k-button>
      <k-button @click="modal7 = true">允许窗口滑动</k-button>
      <br><br>
      <k-button @click="modal2 = true">图文示例</k-button>
      <k-button @click="modal3 = true">头部Slot</k-button>
      <k-button @click="modal4 = true">事件回调</k-button>
    </div>
    <k-modal class="modal1"
             :show.sync="modal1">
      <div class="message">最简单的使用是直接传入一个默认 slot 作为弹窗内容。</div>
    </k-modal>
    <k-modal class="modal5"
             :show.sync="modal5"
             no-close-btn>
      <div class="message">隐藏默认的关闭按钮方法：
        <code>no-close-btn="true"</code>
      </div>
    </k-modal>
    <k-modal class="modal6"
             :show.sync="modal6"
             hide-on-blur>
      <div class="message">点击空白处关闭弹窗：
        <code>hide-on-blur="true"</code>
      </div>
    </k-modal>
    <k-modal class="modal7"
             :show.sync="modal7"
             :freeze-screen="false">
      <div class="message">允许窗口滑动：
        <code>freeze-screen="false"</code>
      </div>
    </k-modal>

    <k-modal class="modal2"
             :show.sync="modal2">
      <k-container flex>
        <img src="https://picsum.photos/300/400">
        <k-container pa="1.5em"
                     pt="40">
          <h3>贵免物笔佛诗文熟跟力幸洋吃它恩。食尼姐！</h3>
          <br>
          <p>皮土责抱意拍可录词？经老护送马喝对供掉等古呀类索形！多备石渐叶势急完秋合今康宝欢伦精。换充无树拿练职兵实列千都望谢念能？才官料许吧论意烈味久果犯展动音词破态树！型志著优禁书市蜖毕睡所案责器？划毫学区菜遍索珍如孩充？预雪急术商证究鲜却消段便神草悲没？华望虽已迷机听园毕。得奖喝之正交朝思桌游孤争醒银倒列失。儿春十入图！司耳况编肯在无且依究孤！才许拿斯第八压毫本学？报维座故得世鱼职谈眼图团建词儿！技牙。</p>
          <br>
          <p>
            <k-button state="warn"
                      @click="modal2 = false">关闭</k-button>
          </p>
        </k-container>
      </k-container>
    </k-modal>

    <k-modal class="modal3"
             :show.sync="modal3"
             :state="state">
      <span slot="header">弹窗头部 slot 🙃</span>
      <k-container pa="1.5em">
        <p>
          <k-button @click="state = 'primary'">primary</k-button>
          <k-button @click="state = 'info'">info</k-button>
          <k-button @click="state = 'success'">success</k-button>
          <k-button @click="state = 'warn'">warn</k-button>
          <k-button @click="state = 'error'">error</k-button>
          <k-button @click="state = ''">unset</k-button>
        </p>
        <k-divider color="$grey-darker"></k-divider>
        <p>皮土责抱意拍可录词？经老护送马喝对供掉等古呀类索形！多备石渐叶势急完秋合今康宝欢伦精。换充无树拿练职兵实列千都望谢念能？才官料许吧论意烈味久果犯展动音词破态树！型志著优禁书市蜖毕睡所案责器？划毫学区菜遍索珍如孩充？预雪急术商证究鲜却消段便神草悲没？华望虽已迷机听园毕。得奖喝之正交朝思桌游孤争醒银倒列失。儿春十入图！司耳况编肯在无且依究孤！才许拿斯第八压毫本学？报维座故得世鱼职谈眼图团建词儿！技牙。</p>
      </k-container>
    </k-modal>
    <k-modal class="modal4"
             :show.sync="modal4"
             @shown="onModalShow"
             @hidden="onModalHide">
      <k-container flex>
        <img src="https://picsum.photos/800/600">
      </k-container>
    </k-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        state: '',
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false
      }
    },

    methods: {
      onModalShow () {
        this.$showToast({
          message: '加载中',
          loading: true
        })
      },

      onModalHide () {
        this.$showToast({
          message: '弹窗已关闭'
        })
      }
    }
  }
</script>


<style lang="stylus">
  .c-modal
    [class^=modal]
      h2
        padding 18px 14px

      h5
        padding 14px

      img
        display block

      .message
        padding 14px
</style>

