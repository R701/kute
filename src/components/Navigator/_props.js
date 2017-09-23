export default {
  items: {
    type: Array, // { text, href, bagde, icon, disabled }
    required: true,
    default: () => ([])
  },
  level: {
    type: Number,
    default: 0
  },
  parentIndex: Number,
  value: Array,
  horizontal: Boolean,
  horizontalGap: {
    default: 10,
    type: Number
  },
  horizontalItemWidth: [Number, String],
  united: {
    type: Boolean,
    default: true
  }
}