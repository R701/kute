export default {
  items: {
    type: Array, // text, href, bagde, icon
    required: true,
    default: () => ([])
  },
  value: {
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  parent: Object,
  parentIndex: Number
}