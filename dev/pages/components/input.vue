<template>
  <div class="c-input">
    <named-block name="initial"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"></k-input>
    </named-block>
    <br>
    <named-block name="disabled"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               disabled></k-input>
    </named-block>
    <br>
    <named-block name="success"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               state="success"></k-input>
    </named-block>
    <br>
    <named-block name="warn"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               state="warn"></k-input>
    </named-block>
    <br>
    <named-block name="error"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               state="error"></k-input>
    </named-block>
    <br>
    <named-block name="error message"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               validator="请输入真实姓名"></k-input>
    </named-block>
    <br>
    <named-block name="validator"
                 position="right">
      <k-input v-model="value"
               placeholder="请输入密码"
               type="password"
               validatorEvent="input change"
               :validator="passwordChecker"></k-input>
    </named-block>
    <br>
    <named-block name="clearable"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               clearable></k-input>
    </named-block>
    <br>
    <named-block name="loading"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               loading></k-input>
    </named-block>
    <br>
    <named-block name="auto select"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               auto-select></k-input>
    </named-block>
    <br>
    <named-block name="icon search"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               icon="search"></k-input>
    </named-block>
    <br>
    <named-block name="icon attention"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               icon="attention"></k-input>
    </named-block>
    <br>
    <named-block name="icon view clickable"
                 position="right">
      <k-input v-model="value"
               placeholder="密码"
               :icon="viewIconName"
               :type="viewType"
               icon-clickable
               @icon-click="onViewIconClick"></k-input>
    </named-block>
    <br>
    <named-block name="suggestions"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               :suggestions="['Chris', 'Christian', 'Christina', 'Christ', 'Christmas', 'Chris', 'Christian', 'Christina']"></k-input>
    </named-block>
    <br>
    <named-block name="with label"
                 position="right">
      <k-input v-model="value"
               placeholder="姓名"
               label="真实姓名："></k-input>
    </named-block>
    <br>
    <named-block name="block"
                 position="bottom">
      <k-input v-model="value"
               placeholder="姓名"
               block></k-input>
    </named-block>
    <br>
    <k-container flex>
      <named-block name="small"
                   position="bottom">
        <k-input v-model="value"
                 placeholder="姓名"
                 icon="search"
                 clearable
                 :suggestions="['Chris', 'Christian', 'Christina', 'Christ', 'Christmas', 'Chris', 'Christian', 'Christina']"
                 size="small"></k-input>
      </named-block>
      <br>
      <named-block name="default"
                   position="bottom">
        <k-input v-model="value"
                 placeholder="姓名"
                 icon="search"
                 clearable
                 :suggestions="['Chris', 'Christian', 'Christina', 'Christ', 'Christmas', 'Chris', 'Christian', 'Christina']"
                 size="default"></k-input>
      </named-block>
      <br>
      <named-block name="large"
                   position="bottom">
        <k-input v-model="value"
                 placeholder="姓名"
                 icon="search"
                 clearable
                 :suggestions="['Chris', 'Christian', 'Christina', 'Christ', 'Christmas', 'Chris', 'Christian', 'Christina']"
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
        value: 'fskdjfkakjf',
        viewIconName: 'view',
        viewType: 'text'
      }
    },

    methods: {
      passwordChecker (value) {
        if (value && value.length < 8) {
          return '密码长度过短，不安全'
        }

        return ''
      },

      onViewIconClick () {
        if (this.viewIconName === 'view') {
          this.viewIconName = 'unview'
          this.viewType = 'password'
        } else {
          this.viewIconName = 'view'
          this.viewType = 'text'
        }
      }
    }
  }
</script>

<style lang="stylus">
.named-block
  margin-right 16px
.c-input .right .named-block-name
  margin-left 32px
.c-input .named-block._block .named-block-main
  width 100%
.c-input .named-block._suggestions
  z-index 2
  position relative
</style>
