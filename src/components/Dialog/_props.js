export default {
  title: {
    type: String,
    default: ''
  },
  message: String,
  state: {
    type: String,
    default: 'info'
  },
  hideCancelButton: Boolean,
  confirmText: {
    default: '确定',
    type: String
  },
  cancelText: {
    default: '取消',
    type: String
  },
  primaryButton: {
    default: 'confirm'
  },
  freezeScreen: {
    type: Boolean,
    default: true
  },
  top: Number
}