import Floater from '~components/_Helpers/Floater'

export default {
  components: { Floater },
  methods: {
    insert () {
      if (this.$isServer) return
      var vm = this.$mount()
      document.body.appendChild(vm.$el)
    },

    remove () {
      if (this.$isServer) return
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}