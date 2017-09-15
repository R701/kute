import styling from './styling'

export default {
  ...styling,

  isTolerantNumber (n) {
    n = +n
    return !isNaN(n)
  }
}
