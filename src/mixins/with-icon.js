export default {
  props: {
    icon: {
      default: ''
    },
    iconPosition: {
      default: 'prepend',
      validator (val) {
        return val == 'prepend' || val == 'append'
      }
    },
    iconClickable: Boolean,
    iconColor: {
      default: 'inherit'
    },
    iconSize: {
      default: 'inherit'
    }
  }
}
