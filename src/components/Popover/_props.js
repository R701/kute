const main = {
  width: [Number, String],
  position: {
    type: String,
    default: 's'
  },
  links: Array,
  show: Boolean,
  fixed: Boolean
}

const link = {
  text: {
    type: String,
    required: true
  },
  disabled: Boolean
}

export { main, link }