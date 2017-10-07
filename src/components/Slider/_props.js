export default {
  min: Number,
  max: Number,
  step: Number,
  value: Number,
  state: String,
  size: String,
  length: {
    type: [String, Number],
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