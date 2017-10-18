<template lang="html">
  <div class="c-popover">
    <div class="positions">
      <k-radio name="position" v-model="position" label="n">n</k-radio>
      <k-radio name="position" v-model="position" label="s">s</k-radio>
      <k-radio name="position" v-model="position" label="w">w</k-radio>
      <k-radio name="position" v-model="position" label="e">e</k-radio>
      <k-radio name="position" v-model="position" label="nw">nw</k-radio>
      <k-radio name="position" v-model="position" label="ne">ne</k-radio>
      <k-radio name="position" v-model="position" label="sw">sw</k-radio>
      <k-radio name="position" v-model="position" label="se">se</k-radio>
    </div>
    <br>
    <div class="options">
      <k-checkbox label="router" :checked.sync="router"></k-checkbox>
      <k-checkbox label="nuxt" :checked.sync="nuxt"></k-checkbox>
      <k-checkbox label="preventDefault" :checked.sync="preventDefault"></k-checkbox>
      <k-checkbox label="icon" :checked.sync="icon"></k-checkbox>
      <k-checkbox label="fixed" :checked.sync="fixed"></k-checkbox>
      <k-checkbox label="set width" :checked.sync="setWidth"></k-checkbox>
      <k-checkbox label="use slot" :checked.sync="useSlot"></k-checkbox>
    </div>
    <br>
    <k-container flex h="200" bg="$black-darker" class="position-example">
      <k-popover :show.sync="show" :fixed="fixed" :width="setWidth ? 200 : 'auto'" :position="position" :links="useSlot ? null : links" :router="router" :nuxt="nuxt" :prevent-default="preventDefault" :icon="icon ? 'share' : null" @select="onSelect">
          <k-button state="primary" @click="show = true">确认</k-button>
          <div slot="content">
            <img src="https://picsum.photos/250/250">
          </div>
      </k-popover>
    </k-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        setWidth: false,
        position: 's',
        nuxt: false,
        router: false,
        preventDefault: false,
        useSlot: false,
        icon: false,
        fixed: false,
        links: [
          {
            href: 'color',
            text: 'Color Panel'
          },
          {
            href: 'typography',
            text: 'Typography Panel'
          },
          { divider: true },
          {
            href: 'button',
            text: 'Button Panel',
            disabled: true
          },
          {
            href: 'input',
            text: 'Input Panel'
          }
        ]
      }
    },

    methods: {
      onSelect (item, index) {
        console.log(item, index)
        alert('您点击了 ' + item.text)
      }
    }
  }
</script>

<style lang="stylus">
  .c-popover
    .positions
      .radio
        margin-right 15px
        text-transform uppercase

    .options
      .checkbox
        margin-right 15px

    .position-example
      justify-content center
      align-items center

    img
      display block
</style>

