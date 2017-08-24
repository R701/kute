import '~stylus/main'
import Button from './components/Button/Button.vue'

export default {
  install (Vue, options = {}) {
    var prefix = options.prefix || 'k'
    Vue.component(`${prefix}-button`, Button)
  },

  Button
}

export { Button }
