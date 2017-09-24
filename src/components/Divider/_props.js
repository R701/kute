export default {
  margin: {
    type: [String, Number],
    default: '1.5em'
  },
  vertical: Boolean,
  color: String,
  lineWidth: {
    type: [Number, String],
    default: 1
  },
  full: {
    type: Boolean,
    default: true
  },

  directParent: {
    type: Boolean,
    default: true
  },

  lineStyle: {
    default: 'solid',
    type: String
  }
}