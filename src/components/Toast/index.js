import Vue from 'vue'
import Toast from './Toast'

const ToastConstructor = Vue.extend(Toast)

const showToast = function ({ onClose, ...rest } = {}) {
  var instance = new ToastConstructor({
    propsData: {
      ...rest
    },

    destroyed () {
      console.log('hi')
      onClose && onClose()
    }
  })

  instance.insert()
}

export { showToast, Toast }