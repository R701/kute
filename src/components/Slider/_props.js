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
  size: String,
  length: {
    type: Number,
    default: 220
  },
  block: Boolean,
  vertical: Boolean,
  disabled: Boolean,
  snap: Boolean,
  tip: Boolean,
  annotated: Boolean,
  lineColor: [String, Array],
  validator: [Function, String],
  validateOnBlur: Boolean,
  label: String
}