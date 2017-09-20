export default {
  props: {
    router: Boolean,
    nuxt: Boolean,
    href: {
      type: String,
      default: ''
    },
    basePath: {
      default: ''
    },
    blank: Boolean,
    preventDefault: Boolean
  },

  computed: {
    fullHref () {
      return `${this.basePath || ''}${this.href}`
    }
  }
}