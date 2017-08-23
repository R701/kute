const path = require('path')
const webpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

var config1 = merge({}, webpackBaseConfig, {
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
var config2 = merge({}, config1, {
  devtool: 'nosources-source-map',
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        reduceIdents: false,
        discardComments: {
          removeAll: true
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
  'kute.min': path.resolve(__dirname, './src/index.js')
}

module.exports = [config1, config2]