import Vue from 'vue'
import Loading from './Loading'

const LoadingConstructor = Vue.extend(Loading)

var instance

const startLoading = function ({ onClose, ...rest } = {}) {
  if (instance) return
  instance = new LoadingConstructor({
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

const stopLoading = function () {
  if (!instance) return

  instance.close()

  instance = null
}

export { startLoading, stopLoading, Loading }