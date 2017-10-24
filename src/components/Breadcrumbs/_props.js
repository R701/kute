const main = {
  data: Array,
  separator: String,
  root: {
    type: [String, Object],
    default: '首页'
  }
}

const item = {
  text: String,
  disabled: Boolean,
  active: Boolean,
  index: Number
}

export { main, item }
