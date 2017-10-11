export default {
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: Number,
  value: Number,
  state: String,
  length: {
    type: Number,
    default: 220
  },
  disabled: Boolean,
  hint: Boolean,
  tip: Boolean,
  annotated: Boolean,
  precision: Number,
  lineColor: [String, Array]
}