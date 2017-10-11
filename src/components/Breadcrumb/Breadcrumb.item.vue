<template lang="html">
  <span class="breadcrumb-item" @click='onItemClick'><span><slot></slot></span><span class="breadcrumb-item-sep">{{separator}}</span></span>
</template>

<script>
import u from '~utils'
export default {
  props: {
    path: {
      type: String
    }
  },
  data () {
    return {
      separator: this.$parent.separator
    }
  },
  methods: {
    onItemClick () {
      if (!this.path) {
        u.noop()
        return
      }
      if (this.$router) {
        this.$router.push(this.path)
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  .breadcrumb
    &-item
      cursor:pointer
</style>
