import Button from './components/Button/Button.vue'

module.exports = {
  install (Vue, options = {}) {
    var prefix = options.prefix || 'k'
    Vue.component(`${prefix}-button`, Button)
  },

  Button
}
