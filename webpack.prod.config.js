const path = require('path')
const webpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const resolve = path.resolve.bind(path, __dirname)
const version = require('./package.json').version

var config1 = merge({}, webpackBaseConfig, {
  output: {
    path: resolve('./dist')
  },
  devtool: 'source-map',
  stats: 'detailed',
  plugins: [
    new webpack.BannerPlugin({
      banner: `\
    kute v${version}
    https://github.com/R701/kute

    Copyright (c) 2017 zhanziyang & thisisandy
    Released under the MIT license
  `
    }),
    new CleanWebpackPlugin('./dist', {
      root: __dirname,
      verbose: false
    })
  ]
})

// minified
var config2 = merge({}, config1, {
  devtool: 'nosources-source-map',
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        reduceIdents: false,
        discardComments: {
          removeAllButFirst: true
        },
        discardUnused: false
      },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})

config2.entry = {
  'kute.min': resolve('./src/index.js')
}

module.exports = [config1, config2]
