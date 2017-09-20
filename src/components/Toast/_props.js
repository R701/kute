export default {
  message: {
    type: String,
    required: true
  },
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