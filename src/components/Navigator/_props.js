export default {
  items: {
    type: Array,
    required: true,
    default: () => ([]),
    validator (values) {
      return values.every(val => {
        return 'href' in val && 'text' in val
      })
    }
  },
  activeIndex: {
    default: 0
  },
  router: Boolean,
  nuxt: Boolean,
  basePath: {
    default: ''
  }
}