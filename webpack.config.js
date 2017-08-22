var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    filename: 'kute.js',
    path: path.resolve(__dirname, './dist'),
    library: 'Kute',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
