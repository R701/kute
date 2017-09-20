import Vue from 'vue'
import Notification from './Notification'

const NotificationConstructor = Vue.extend(Notification)

const notify = function ($router, { onClose, onClick, ...rest } = {}) {
  var instance = new NotificationConstructor({
    propsData: {
      ...rest,
      routerObj: $router
    },

    destroyed () {
      onClose && onClose()
    },

    methods: {
      clickHandler (evt) {
        return onClick && onClick(evt)
      }
    }
  })

  instance.insert()

  return instance
}

export { notify, Notification }