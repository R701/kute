export default {
  getCSSLength (val) {
    if (typeof val === 'number') return val + 'px'
    if (typeof (+val) === 'number' && !isNaN(+val)) return val + 'px'

    const units = ['%', 'em', 'ex', 'cap', 'ch', 'ic', 'rem', '1h', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'mm', 'q', 'cm', 'in', 'pt', 'pc']
    if (typeof val === 'string' && new RegExp(`^[\\d.]+(${units.join('|')})$`).test(val)) {
      return val
    }

    return 'auto'
  }
}
