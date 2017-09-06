import vOutsideEvents from 'vue-outside-events'

import '~stylus/main'
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import Panel from './components/Panel/Panel'
import Navigator from './components/Navigator/Navigator'
import Spinner from './components/Spinner/Spinner'
import Group from './components/Group/Group'
import Input from './components/Input/Input'

var components = {
  button: Button,
  container: Container,
  panel: Panel,
  navigator: Navigator,
  spinner: Spinner,
  group: Group,
  input: Input
}

export default {
  install (Vue, options = {}) {
    Vue.use(vOutsideEvents)

    var prefix = options.prefix || 'k'

    for (var key in components) {
      if (components.hasOwnProperty(key)) {
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

export { Button, Container, Panel, Navigator, Spinner, Group, Input }
