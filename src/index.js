import vOutsideEvents from 'vue-outside-events'

import '~stylus/main'
import utils from '~utils'
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import Panel from './components/Panel/Panel'
import Divider from './components/Divider/Divider'
import Navigator from './components/Navigator/Navigator'
import Spinner from './components/Spinner/Spinner'
import Group from './components/Group/Group'
import Input from './components/Input/Input'
import Checkbox from './components/Checkbox/Checkbox'
import Radio from './components/Radio/Radio'
import Switch from './components/Switch/Switch'
import Slider from './components/Slider/Slider'
import { showToast, Toast } from './components/Toast'
import { notify, Notification } from './components/Notification'
import { showDialog, Dialog } from './components/Dialog'
import { startLoading, stopLoading, Loading } from './components/Loading'
import Modal from './components/Modal/Modal'
import Drawer from './components/Drawer/Drawer'
import Popover from './components/Popover/Popover'
import PopoverLink from './components/Popover/PopoverLink'
import Progress from './components/Progress/Progress'
import Tabs from './components/Tabs/Tabs'
import TabPane from './components/Tabs/TabPane'
// import Breadcrumb from './components/Breadcrumb/Breadcrumb'
// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import List from './components/List/List'

var components = {
  button: Button,
  container: Container,
  panel: Panel,
  divider: Divider,
  navigator: Navigator,
  spinner: Spinner,
  group: Group,
  input: Input,
  checkbox: Checkbox,
  radio: Radio,
  switch: Switch,
  slider: Slider,
  toast: Toast,
  notification: Notification,
  dialog: Dialog,
  loading: Loading,
  modal: Modal,
  drawer: Drawer,
  popover: Popover,
  'popover-link': PopoverLink,
  progress: Progress,
  tabs: Tabs,
  'tab-pane': TabPane,
  // breadcrumb: Breadcrumb,
  // 'breadcrumb-item': BreadcrumbItem,
  breadcrumbs: Breadcrumbs,
  list: List
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
    // console.log('env:', process.env.NODE_ENV)
    Vue.mixin({
      props:
        process.env.NODE_ENV === 'development'
          ? {
            debug: Boolean
          }
          : {},

      data () {
        return {
          config$: {
            defaultLoadingMessage: options.defaultLoadingMessage || '加载中，请稍等片刻',
            defaultLoadingTimeout: options.defaultLoadingTimeout || 0,
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
    Vue.prototype.$startLoading = startLoading
    Vue.prototype.$stopLoading = stopLoading
  },

  ...components,
  utils
}

export {
  Button,
  Container,
  Panel,
  Divider,
  Navigator,
  Spinner,
  Group,
  Input,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Toast,
  Notification,
  Dialog,
  Loading,
  Modal,
  Drawer,
  Popover,
  PopoverLink,
  Progress,
  Tabs,
  TabPane,
  // Breadcrumb,
  // BreadcrumbItem,
  Breadcrumbs,
  List
}
