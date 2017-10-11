import styling from './styling'
import omit from 'object.omit'
import assign from 'object-assign'
import Vue from 'vue'

export default {
  ...styling,

  isTolerantNumber (n) {
    n = +n
    return !isNaN(n)
  },

  isArray (val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  },

  assign,

  omit,

  isVM (obj) {
    return obj instanceof Vue
  },

  isWhichVM (obj, name) {
    return this.isVM(obj) && obj.$options.name === name
  },
  noop: () => {}
}
