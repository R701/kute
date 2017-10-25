<template>
  <div class="c-drawer">
    <div class="btns">
      <k-button @click="left = true">Left</k-button>
      <k-button @click="right = true">Right</k-button>
    </div>
    <k-drawer :show.sync="left"
      side="left">
      <k-container w="500"
        pa="20">
        火己区否苏。供木告观可忍似腿化成藸乡笔族示排灵？你任索志己小甚顺持停亡紶工觉玩翻？很日业项接。个冰别脑慢？迹曲巴睡贝她永第。束份独灵付十夫何车！府婚河舞江宝药充需相洋休兴党广本。收部因了底忘都！烟调致拥充住体指考够分困巨料然从百化几！离模词帝顺么蒙标岁校！养赛极族属您好按望失？秋态秋整礼伴只跑孤男姆餐神卖境素？举华若环照什望刚摇像功官海板原北鲜划佛！莫房内护师迹台直妻品收意范？信西早于印皇个守。？
      </k-container>
    </k-drawer>
    <k-drawer :show.sync="right"
      side="right">
      <k-container w="500"
        pa="20">火己区否苏。供木告观可忍似腿化成藸乡笔族示排灵？你任索志己小甚顺持停亡紶工觉玩翻？很日业项接。个冰别脑慢？迹曲巴睡贝她永第。束份独灵付十夫何车！府婚河舞江宝药充需相洋休兴党广本。收部因了底忘都！烟调致拥充住体指考够分困巨料然从百化几！离模词帝顺么蒙标岁校！养赛极族属您好按望失？秋态秋整礼伴只跑孤男姆餐神卖境素？举华若环照什望刚摇像功官海板原北鲜划佛！莫房内护师迹台直妻品收意范？信西早于印皇个守。？</k-container>
    </k-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
        right: false
      }
    }
  }
</script>
