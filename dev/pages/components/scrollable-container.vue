<template>
  <div class="c-scroll">
    <k-container flex
                 class="container-y">
      <named-block :name="'scroll-y: ' + value"
                   position="right">
        <k-container class="c1"
                     w="300"
                     h="300"
                     pa="1em"
                     :bg="bg"
                     :overflow="false"
                     scroll-y
                     :scroll-top="value"
                     @scroll-to-upper="bg = '$state-warn'"
                     @scroll-to-lower="bg = '$state-success'"
                     @scroll="onScroll">
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
        </k-container>
      </named-block>
      <named-block name="scroll-in-view='#view'"
                   position="right">
        <k-container class="c3"
                     w="300"
                     h="300"
                     pa="1em"
                     bg="$grey-darker"
                     :overflow="false"
                     scroll-y
                     scroll-into-view="#view">
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p id="view">乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
          <br>
          <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
        </k-container>
      </named-block>
    </k-container>
    <br><br>
    <named-block :name="'scroll-x: ' + value2"
                 position="right">
      <k-container class="c2"
                   w="300"
                   h="300"
                   pa="1em"
                   :bg="bg2"
                   :overflow="false"
                   scroll-x
                   :scroll-left="value2"
                   @scroll-to-upper="bg2 = '$state-warn'"
                   @scroll-to-lower="bg2 = '$state-success'"
                   @scroll="onScroll2">
        <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
        <br>
        <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。故趣套族期居饭饭副后态周里之烈是？增夜著例权官也证住欢香朝两諣吸已遇队。啊非卫慢升便如介维蒙枪建维导集妹放顶分？相架？</p>
        <br>
        <p>乐萨飞吗旧妇提远！须穿国是藏剧女过狗给英盖误民伯微还守！寻点临肯妙尔遍前把闻容阵复传脸资远纳！落息东生展界革态阳！姑关毛作奇。奥树错尔京创贵找。琴沙则论而吧技员冷山职药美！银深降案圣是确歌这设换授在塞妙！洗烈只跑取既稜州仅始这市骨塞！睡宝过恶营即刻病所八金态这形世没解。败美制进需。</p>
      </k-container>
    </named-block>
  </div>
</template>

<script>
  import NamedBlock from '@/components/NamedBlock'
  export default {
    components: {
      NamedBlock
    },

    data () {
      return {
        bg: '$grey-darker',
        bg2: '$grey-darker',
        value: 50,
        value2: 50
      }
    },

    methods: {
      onScroll ({ scrollTop }) {
        this.bg = '$grey-darker'

        this.value = scrollTop
      },

      onScroll2 ({ scrollLeft }) {
        this.bg2 = '$grey-darker'

        this.value2 = scrollLeft
      }
    }
  }
</script>

<style lang="stylus">
  .c-scroll
    .c1, .c2, .c3
      transition background-color 0.6s
      margin-right 20px

    .c2
      p
        width 800px
        padding-right 1em

    #view
      color $theme-primary

    .container-y
      justify-content space-between
</style>
