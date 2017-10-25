import Vue from 'vue'
import Loading from './Loading'

const LoadingConstructor = Vue.extend(Loading)

var instance

const startLoading = function (
  { onShow, onClose, onProgress, onTimeout, timeout, ...rest } = {}
) {
  if (instance) return
  instance = new LoadingConstructor({
    propsData: {
      ...rest
    },

    destroyed () {
      instance = null
      onClose && onClose()
    },

    watch: {
      progress (val) {
        onProgress && onProgress(val)
      }
    }
  })

  instance.insert(onShow)

  timeout = timeout || instance.config$.defaultLoadingTimeout
  if (timeout) {
    setTimeout(() => {
      if (instance) {
        onTimeout && onTimeout(instance)
        instance.close()
      }
    }, timeout)
  }

  return instance
}

const stopLoading = function () {
  if (!instance) return

  instance.close()
}

export { startLoading, stopLoading, Loading }
