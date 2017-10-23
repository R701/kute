export default {
  data: {
    type: Array,
    required: true
  },
  itemKey: String,
  listStyle: {
    type: String, // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
    default: 'none'
  },
  flex: Boolean,
  wrap: {
    type: Boolean,
    default: true
  },
  reverse: Boolean,
  xgap: {
    type: Number,
    default: 15
  },
  ygap: {
    type: Number,
    default: 20
  },
  cols: {
    type: Number,
    default: 1
  },
  balanced: Boolean,
  sortable: Boolean,
  transitionName: {
    type: String,
    default: 'cell'
  },
  transitionEnterClass: {
    type: String,
    default: 'fade'
  },
  transitionLeaveClass: {
    type: String,
    default: 'fade'
  }
}
