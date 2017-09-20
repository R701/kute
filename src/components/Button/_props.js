export default {
  outline: Boolean,
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,
  disableWhileLoading: {
    type: Boolean,
    default: true
  },
  ghost: Boolean,
  state: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  }
}
