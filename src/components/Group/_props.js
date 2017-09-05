export default {
  vertical: Boolean,
  gap: {
    type: Number,
    default: 1,
    validator: function (value) {
      return value >= 0
    }
  }
}