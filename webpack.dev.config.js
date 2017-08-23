const webpackBaseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(__dirname, './dev/static/kute')
  },
  stats: 'minimal',
  watch: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new CleanWebpackPlugin('./dev/static/kute', {
      root: __dirname,
      verbose: false
    })
  ]
})
