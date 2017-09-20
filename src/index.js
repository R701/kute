import vOutsideEvents from 'vue-outside-events'

import '~stylus/main'
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import Panel from './components/Panel/Panel'
import Navigator from './components/Navigator/Navigator'
import Spinner from './components/Spinner/Spinner'
import Group from './components/Group/Group'
import Input from './components/Input/Input'
import Checkbox from './components/Checkbox/Checkbox'
import Radio from './components/Radio/Radio'
import { showToast, Toast } from './components/Toast'
import { notify, Notification } from './components/Notification'
import { showDialog, Dialog } from './components/Dialog'

var components = {
  button: Button,
  container: Container,
  panel: Panel,
  navigator: Navigator,
  spinner: Spinner,
  group: Group,
  input: Input,
  checkbox: Checkbox,
  radio: Radio,
  toast: Toast,
  notification: Notification,
  dialog: Dialog
}

export default {
  install (Vue, options = {}) {
    Vue.use(vOutsideEvents)

    var namespace = options.prefix || 'k'

    for (var key in components) {
      if (components.hasOwnProperty(key)) {
        Vue.component(`${namespace}-${key}`, components[key])
      }
    }

    Vue.mixin({
      data () {
        return {
          config$: {
            defaultToastTop: options.defaultToastTop,
            defaultDialogTop: options.defaultDialogTop,
            iconClassPrefix: options.iconClassPrefix || 'iconfont icon-',
            namespace: namespace
          }
        }
      }
    })

    Vue.prototype.$showToast = showToast
    Vue.prototype.$notify = function (payload) {
      notify(this.$router, payload)
    }
    Vue.prototype.$showDialog = showDialog
  },

  ...components
}

export {
  Button,
  Container,
  Panel,
  Navigator,
  Spinner,
  Group,
  Input,
  Checkbox,
  Radio,
  Toast,
  Notification,
  Dialog
}
