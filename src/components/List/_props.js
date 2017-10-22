export default {
  data: {
    type: Array,
    required: true
  },
  listStyle: {
    type: String, // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
    default: 'none'
  },
  wrap: {
    type: Boolean,
    default: true
  },
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
  sortable: Boolean,
  transitionEnterClass: {
    type: String,
    default: 'fade'
  },
  transitionLeaveClass: {
    type: String,
    default: 'fade'
  }
}
