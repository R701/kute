export default {
  link: Boolean,
  routerLink: Boolean,
  nuxt: Boolean,
  href: {
    type: String,
    default: ''
  },
  outline: Boolean,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,
  disableWhileLoading: {
    type: Boolean,
    default: true
  },
  icon: String,
  iconClassPrefix: {
    type: String,
    default: 'iconfont icon-'
  },
  state: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  }
}
