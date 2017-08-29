<template>
  <div class="c-color">
    <div class="headers">
      <h1 data-name="$h1">H1 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h1>
      <h2>H2 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h2>
      <h3>H3 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h3>
      <h4>H4 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h4>
      <h5>H5 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h5>
      <h6>H6 雷终工校姑？许重烈为换育娜战续脑彩告！
        <dashed-line></dashed-line>
      </h6>
    </div>
    <br>
    <article>
      <header>
        <h3>标题观深状屋会睛守否传黑顿马？电付情必经血？</h3>
      </header>
      <p>女妇话及视佛员！守众西同父油系温价己脸加游物弹第交客洲！模靠卡吧喊革己条力。刚声故本速专秘缺极入雄周？永顶实内目于记原坐堂妈。统采职造终英阵礼似岛叶所？住蜖征吸冷完罗更黄而话小贝是击士普太。琴乐见泪岁换午救向？还作久革若盛续歌到。沙维春院他线间纸至？格康也未恋布都考观味味毕琴速她也莫！莫我出托术狗团宣突方画晚碃鞋八基轻鲁！官母根早块制岛品微后。色棋馆窢空演！露写肯于亮刚火经反会拉高天曲护鲁具？听？</p>
      <footer>
        <span>作者发表于 2017-07-09</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">查看详情</a>
      </footer>
    </article>
    <br>
    <article>
      <blockquote>雄必姆否娘清必境森走须妹！分断翻母方油司示皇局衣忽迷般议恋资礼护。寻属熟严片忙室考维休前消留许而双！欧道团藏公脚判桌与充回吧巴达！宣所古诉电谈雪！受出窢动护索对上境它告？数条雨推巨治并节标答的乐！司空保此间单五微仍备范变孤随而汽约。亮么激周既右游校神全文义即。玛给旧查英越存牌居地喊度讲？介就园行十责击接因调三产饭？岛们养慢</blockquote>
    </article>
    <br>
    <article>
      <ul>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
      </ul>
      <br>
      <ol>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
        <li>这是列表项之一</li>
      </ol>
    </article>
  </div>
</template>

<script>
  import DashedLine from '@/components/DashedLine'
  export default {
    components: {
      DashedLine
    }
  }
</script>


<style lang="stylus" scoped>
.headers
  for i in (1...7)
    h{i}
      margin-bottom 20px
      position relative
      white-space nowrap
      display flex
      align-items center
      &:after
        content ('$font-size-h' + i)
        color $grey-lighter
        text-shadow $shadow-basic
        font-size $font-size-h6
        flex 1
        margin-left 1em
      .dashed-line
        flex-shrink 2
</style>
