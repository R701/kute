<template>
  <div class="c-container">
    <div class="parent-controller">
      <h3>parent container</h3>
      <template v-for="(key, index) in getKeys(parent1)">
        <k-checkbox class="controller"
          v-if="typeof parent1[key] === 'boolean'"
          :checked.sync="parent1[key]"
          :key="index">{{key}}</k-checkbox>
        <k-input class="controller"
          v-else-if="typeof parent1[key] === 'string'"
          :placeholder="key"
          :label="`${key}:`"
          :key="index"
          v-model="parent1[key]"></k-input>
      </template>
    </div>
    <br>
    <k-container class="parent"
      v-bind="parent1"
      style="border: 1px solid white">
      <k-loading local
        v-if="parent1.loading"></k-loading>
      <k-container v-for="(child, index) in parent1.children"
        :key="index"
        v-bind="child"
        :class="['child', { 'active': parent1.active === index }]"
        @click.native="parent1.active = index">
        <k-loading local
          v-if="child.loading"
          :scale=".5"
          message=""></k-loading>
        共克了微亮最应请把哥随空？娘江可亮值取庭属收否分顶？参闻光伦由集城正导洛府和肯续神棋三方公？列佛岁秘世酒喜在出救还免臓斯汉戏为乐？叶农吃须肉除吗嘴忆。重巨脚乱去这治妇温课毛让拍云名连画！应本萨压张银欢门次战预商默阿跳贵渐？</k-container>
    </k-container>

    <br><br>
    <div class="child-controller">
      <h3>child container {{parent1.active}}</h3>
      <template v-for="(key, index) in getKeys(parent1.children[parent1.active])">
        <k-checkbox class="controller"
          v-if="typeof parent1.children[parent1.active][key] === 'boolean'"
          :checked.sync="parent1.children[parent1.active][key]"
          :key="index">{{key}}</k-checkbox>
        <k-input class="controller"
          v-else-if="typeof parent1.children[parent1.active][key] === 'string'"
          :placeholder="key"
          :label="`${key}:`"
          :key="index"
          v-model="parent1.children[parent1.active][key]"></k-input>
      </template>
    </div>
    <br>
  </div>
</template>

<script>
  import { merge as _merge } from 'lodash'
  export default {
    data () {
      var options = {
        inline: false,
        flex: false,
        column: false,
        wrap: false,
        relative: false,
        scroll: false,
        overflow: false,
        loading: false,
        w: '',
        h: '',
        pa: '',
        ph: '',
        pv: '',
        pt: '',
        pb: '',
        pl: '',
        pr: '',
        ma: '',
        mh: '',
        mv: '',
        mt: '',
        mb: '',
        ml: '',
        mr: '',
        bg: ''
      }

      var p1 = _merge({}, options, {
        flex: true,
        pa: '30',
        bg: '$black',
        h: '300'
      })
      var p1c1 = _merge({}, options, {
        bg: '$grey-lighter',
        mr: '10',
        pa: '1.5em',
        scroll: true
      })
      var p1c2 = _merge({}, options, {
        bg: '$grey',
        mh: '10',
        pa: '1.5em',
        scroll: true
      })
      var p1c3 = _merge({}, options, {
        bg: '$black-lighter',
        mh: '10',
        pa: '1.5em',
        scroll: true
      })
      var p1c4 = _merge({}, options, {
        bg: '$black-darker',
        ml: '10',
        pa: '1.5em',
        scroll: true
      })
      return {
        parent1: {
          ...p1,
          active: 0,
          children: [p1c1, p1c2, p1c3, p1c4]
        }
      }
    },

    methods: {
      getKeys (obj) {
        return Object.keys(obj)
      }
    }
  }
</script>

<style lang="stylus">
  .c-container
    .controller
      margin-right 15px
      margin-bottom 10px

    .child
      transition all 0.3s

      &:hover
        opacity 0.9
        cursor pointer

      &.active
        background $theme-primary !important
</style>
