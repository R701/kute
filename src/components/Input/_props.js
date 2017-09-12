export default {
  select: Boolean,
  textarea: Boolean,
  value: [String, Number],
  block: Boolean,
  outline: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  loading: Boolean,
  readonly: Boolean,
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
  listFilter: Function,
  size: {
    type: String,
    default: 'default'
  },
  options: Array,
  optionValueKey: {
    default: 'value'
  },
  optionTextKey: {
    default: 'text'
  },
  resize: {
    // textarea only
    default: 'none',
    validator (val) {
      const valid = ['none', 'both', 'vertical', 'horizontal']
      return valid.indexOf(val) >= 0
    }
  },

  autoHeight: Boolean,
  autoSelect: Boolean,
  spellcheck: Boolean
}