const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const axis = require('axis')
const webpack = require('webpack')

const extractPlugin = ExtractTextPlugin.extract({
  use: [
    'css-loader?sourceMap',
    {
      loader: 'stylus-loader',
      options: {
        sourceMap: true
      }
    }
  ],
  fallback: 'vue-style-loader'
})

module.exports = {
  entry: {
    kute: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    library: 'Kute',
    libraryTarget: 'umd'
    // libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'stylus': path.resolve(__dirname, './src/stylus')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: extractPlugin
          },
          postcss: [require('postcss-cssnext')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: extractPlugin,
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [axis()],
          import: ['~stylus/main.styl']
        }
      }
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  performance: {
    hints: 'error'
  }
}
