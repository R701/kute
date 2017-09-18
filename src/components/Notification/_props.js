export default {
  message: {
    default: ''
  },
  state: {
    type: String,
    default: 'default'
  },
  duration: {
    default: 3000,
    type: Number
  },
  closable: {
    type: Boolean,
    default: true
  },
  parent: {
    default: () => {
      var p = document.querySelector('.k-notifications')

      if (!p) {
        p = document.createElement('div')
        p.setAttribute('class', 'k-notifications')
        document.body.appendChild(p)
      }

      return p
    }
  }
}