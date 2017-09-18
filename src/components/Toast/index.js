import Vue from 'vue'
import Toast from './Toast'

const ToastConstructor = Vue.extend(Toast)

const showToast = function ({ onClose, ...rest } = {}) {
  var instance = new ToastConstructor({
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

export { showToast, Toast }