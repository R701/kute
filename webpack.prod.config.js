const path = require('path')
const webpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var config1 = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'source-map',
  stats: 'detailed',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin('./dist', {
      root: __dirname,
      verbose: false
    })
  ]
})

// minified
var config2 = merge(config1, {
  output: {
    filename: 'kute.min.js'
  },
  devtool: 'nosources-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: 'kute.min.css'
    })
  ]
})

module.exports = [config1, config2]