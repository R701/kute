import '~stylus/main'
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import Panel from './components/Panel/Panel'

var components = {
  button: Button,
  container: Container,
  panel: Panel
}

export default {
  install (Vue, options = {}) {
    var prefix = options.prefix || 'k'

    for (var key in components) {
      if (components.hasOwnProperty(key)) {
        console.log(key)
        Vue.component(`${prefix}-${key}`, components[key])
      }
    }

    Vue.mixin({
      props: {
        iconClassPrefix: {
          type: String,
          default: 'iconfont icon-'
        }
      }
    })
  },

  ...components
}

export { Button, Container, Panel }
