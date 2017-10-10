module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'eol-last': 0,
    eqeqeq: 0,
    camelcase: 0
  },
  globals: {
    window: true
  }
}
