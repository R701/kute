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
        value: ''
      }
    },

    methods: {
      passwordChecker (value) {
        if (value && value.length < 8) {
          return '密码长度过短，不安全'
        }

        return ''
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
.c-input .named-block-name
  margin-left 32px
</style>
