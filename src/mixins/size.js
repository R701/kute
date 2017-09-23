export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator (val) {
        var valid = ['default', 'large', 'small']
        return valid.indexOf(val) >= 0
      }
    }
  }
}