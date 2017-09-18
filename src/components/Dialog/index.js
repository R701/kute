import Vue from 'vue'
import Dialog from './Dialog'

const DialogConstructor = Vue.extend(Dialog)

const showDialog = function ({ onClose, onConfirm, onCancel, ...rest } = {}) {
  var instance = new DialogConstructor({
    propsData: {
      ...rest
    },

    destroyed () {
      onClose && onClose()
    },

    methods: {
      confirmHandler () {
        return onConfirm && onConfirm()
      },

      cancelHandler () {
        return onCancel && onCancel()
      }
    }
  })

  instance.insert()

  return instance
}

export { showDialog, Dialog }