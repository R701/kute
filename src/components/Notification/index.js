import Vue from 'vue'
import Notification from './Notification'

const NotificationConstructor = Vue.extend(Notification)

const notify = function ({ onClose, ...rest } = {}) {
  var instance = new NotificationConstructor({
    propsData: {
      ...rest
    },

    destroyed () {
      onClose && onClose()
    }
  })

  instance.insert()

  return instance
}

export { notify, Notification }