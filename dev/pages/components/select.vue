<template>
  <div class="c-select">
    <named-block name="initial"
                 position="right">
      <k-input v-model="value"
               :options="options"
               select
               placeholder="选择城市"></k-input>
    </named-block>
    <br>
    <named-block name="disabled"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               disabled></k-input>
    </named-block>
    <br>
    <named-block name="success"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               state="success"></k-input>
    </named-block>
    <br>
    <named-block name="warn"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               state="warn"></k-input>
    </named-block>
    <br>
    <named-block name="error"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               state="error"></k-input>
    </named-block>
    <br>
    <named-block name="error message"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               validator="未选择城市"></k-input>
    </named-block>
    <br>
    <named-block name="validator"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               :validator="cityChecker"></k-input>
    </named-block>
    <br>
    <named-block name="icon search"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               icon="search"></k-input>
    </named-block>
    <br>
    <named-block name="icon attention"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               icon="attention"></k-input>
    </named-block>
    <br>
    <named-block name="icon view"
                 position="right">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               icon="view"></k-input>
    </named-block>
    <br>
    <named-block name="with label"
                 position="right">
      <k-input v-model="value"
               select
               :options="options"
               label="城市："></k-input>
    </named-block>
    <br>
    <named-block name="block"
                 position="bottom">
      <k-input v-model="value"
               select
               placeholder="选择城市"
               :options="options"
               block></k-input>
    </named-block>
    <br>
    <k-container flex>
      <named-block name="small"
                   position="bottom">
        <k-input v-model="value"
                 select
                 placeholder="选择城市"
                 icon="search"
                 clearable
                 :options="options"
                 size="small"></k-input>
      </named-block>
      <br>
      <named-block name="default"
                   position="bottom">
        <k-input v-model="value"
                 select
                 placeholder="选择城市"
                 icon="search"
                 clearable
                 :options="options"
                 size="default"></k-input>
      </named-block>
      <br>
      <named-block name="large"
                   position="bottom">
        <k-input v-model="value"
                 select
                 placeholder="选择城市"
                 icon="search"
                 clearable
                 :options="options"
                 size="large"></k-input>
      </named-block>
    </k-container>
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
        value: '',
        options: [
          { text: '龙岩', value: 'ly' },
          { text: '厦门', value: 'xm' },
          { text: '深圳', value: 'sz' },
          { text: '上海', value: 'sh' }
        ]
      }
    },

    methods: {
      passwordChecker (value) {
        if (value && value.length < 8) {
          return '密码长度过短，不安全'
        }

        return ''
      },

      cityChecker (value) {
        if (value && value === '龙岩') {
          return '不能选龙岩'
        }
      },

      async usernameChecker (value) {
        var msg = new Promise(resolve => {
          setTimeout(function () {
            if (value === 'evil') {
              resolve('invalid words')
            } else {
              resolve('')
            }
          }, 1000)
        })

        return Promise.resolve(msg)
      }
    }
  }
</script>

<style lang="stylus">
.named-block
  margin-right 16px
.c-select .right .named-block-name
  margin-left 32px
.c-select .named-block._block .named-block-main
  width 100%
.c-select .named-block._suggestions
  z-index 2
  position relative
</style>
