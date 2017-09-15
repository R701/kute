export default {
  message: String,
  state: {
    type: String,
    default: 'default'
  },
  duration: {
    default: 3000,
    type: Number
  },
  closable: Boolean,
  loading: Boolean,
  top: Number
}