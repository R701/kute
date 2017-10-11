import isCssColor from 'is-css-color'

export default {
  getCSSLength (val, math) {
    if (typeof (+val) === 'number' && !isNaN(+val)) {
      if (typeof math === 'function') {
        return math(+val) + 'px'
      }
      return val + 'px'
    }

    const units = ['%', 'em', 'ex', 'cap', 'ch', 'ic', 'rem', '1h', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'mm', 'q', 'cm', 'in', 'pt', 'pc']
    if (typeof val === 'string' && new RegExp(`^[\\d.]+(${units.join('|')})$`).test(val)) {
      if (typeof math === 'function') {
        var result = new RegExp(`^([\\d.]+)(${units.join('|')})$`).exec(val)
        var num = result[1]
        var unit = result[2]
        return math(+num) + unit
      } else {
        return val
      }
    }

    if (typeof val === 'string' && /([1-9]\d*)\/([1-9]\d*)/.test(val)) {
      let result = /([1-9]\d*)\/([1-9]\d*)/.exec(val)
      let numerator, denominator
      numerator = result[1]
      denominator = result[2]
      let number = numerator / denominator * 100
      if (typeof math === 'function') {
        number = math(number)
      }
      return number + '%'
    }

    return 'auto'
  },

  getCSSColor (val) {
    if (isCssColor(val)) return val

    const cssSettings = {
      '$theme-primary': '#0287c8',
      '$theme-primary-lighter': '#03abff',
      '$theme-primary-darker': '#01608f',
      /*  */
      '$theme-secondary': '#E5B547',
      '$theme-secondary-lighter': '#ffca4f',
      '$theme-secondary-darker': '#cca23f',
      /*  */
      '$black': '#272727',
      '$black-lighter': '#303030',
      '$black-darker': '#222222',
      /*  */
      '$grey': '#737780',
      '$grey-lighter': '#8a8f99',
      '$grey-darker': '#5c5f66',
      /*  */
      '$white': '#dcdee0',
      '$white-darker': '#c8cacc',
      '$white-lighter': '#eff1f3',
      /*  */
      '$state-info': '#009fb7',
      '$state-success': '#00c246',
      '$state-warn': '#f7990c',
      '$state-error': '#f24236'
    }

    return cssSettings[val] || val
  },

  getPxValue (str) {
    var result = /^(\d+)px$/.exec(str)
    return result ? +result[1] : null
  }
}
