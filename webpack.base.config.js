const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const axis = require('axis')
const webpack = require('webpack')
const resolve = path.resolve.bind(path, __dirname)

const extractPlugin = ExtractTextPlugin.extract({
  use: 'css-loader?sourceMap!stylus-loader?sourceMap',
  fallback: 'vue-style-loader'
})

module.exports = {
  entry: {
    kute: resolve('./src/index.js')
  },
  output: {
    filename: '[name].js',
    library: 'Kute',
    libraryTarget: 'umd'
    // libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts', '.styl'],
    alias: {
      '~': resolve('./src'),
      '~components': resolve('./src/components'),
      '~directive': resolve('./src/directive'),
      '~assets': resolve('./src/assets'),
      '/assets': resolve('./src/assets'),
      'stylus': resolve('./src/stylus'),
      '/stylus': resolve('./src/stylus')
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
          preferPathResolver: 'webpack',
          use: [axis()],
          import: ['~stylus/main']
        }
      }
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development' // use 'development' unless process.env.NODE_ENV is defined
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  performance: {
    hints: false
  }
}
