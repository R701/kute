export default {
  format: {
    default: (str, status) => {
      if (status !== 'active') {
        return status
      }
      return str + '%'
    },
    type: Function
  },
  percent: {
    default: 0,
    type: Number
  },
  state: {
    default: 'active',
    type: String
  },
  size: {
    type: String
  },
  type: {
    type: String,
    default: 'bar'
  },
  tooltip: Boolean
}
