export default {
  value: [String, Number],
  block: Boolean,
  outline: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  loading: Boolean,
  validator: [Function, String],
  validatorEvent: {
    type: String,
    default: 'change'
  },
  label: String,
  icon: String,
  state: {
    type: String,
    default: 'default'
  },
  suggestions: [Array, Promise],
  suggestDebounce: {
    type: Number,
    default: 0
  },
  listMaxHeight: {
    type: [String, Number],
    default: 'auto'
  },
  listMaxWidth: {
    type: [String, Number],
    default: '100%'
  },
  listMinWidth: {
    type: [String, Number],
    default: '60%'
  },
  listFilter: Function,
  size: {
    type: String,
    default: 'default'
  }
}