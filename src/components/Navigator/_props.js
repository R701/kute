const containerProps = {
  items: {
    type: Array, // [itemProps+]
    required: true,
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  },
  parentIndex: Number,
  value: Array,
  horizontal: Boolean,
  horizontalGap: {
    default: 0,
    type: Number
  },
  horizontalItemWidth: [Number, String],
  united: {
    type: Boolean,
    default: true
  },
  autoToggle: Boolean,
  initialToggleIndexes: {
    default: () => [],
    type: Array
  }
}

// Item props passed to container will be passed to all items :)
const itemProps = {
  index: Number,
  text: String,
  badge: [Number, String],
  badgeColor: String,
  disabled: Boolean,
  children: Array,
  active: Boolean,
  showChildren: Boolean
}

export { containerProps, itemProps }
