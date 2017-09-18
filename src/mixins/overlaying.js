import Overlay from '~components/_Helpers/Overlay'

export default {
  components: { Overlay },
  methods: {
    insert () {
      if (this.$isServer) return
      var vm = this.$mount()
      var parent = this.parent || document.body
      parent.appendChild(vm.$el)
    },

    remove () {
      if (this.$isServer) return
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}