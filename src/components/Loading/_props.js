export default {
  message: {
    type: String,
    default: '加载中，请稍等片刻'
  },
  state: String,
  freezeScreen: {
    type: Boolean,
    default: true
  },
  bar: Boolean,
  progress: Number,
  timeout: {
    type: Number,
    default: 0
  }
}