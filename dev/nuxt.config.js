const path = require('path')
const webpack = require('webpack')
const axis = require('axis')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kute-page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Main page for project kute.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.resolve.alias.kute = path.resolve(__dirname, '../src')
      config.resolve.alias['~'] = path.resolve(__dirname, '../src')
      config.resolve.alias['~components'] = path.resolve(__dirname, '../src/components')
      config.resolve.alias['~stylus'] = path.resolve(__dirname, '../src/stylus')
      config.resolve.alias['stylus'] = path.resolve(__dirname, '../src/stylus')
      config.resolve.extensions.push('.styl')
      config.plugins.push(new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            preferPathResolver: 'webpack',
            use: [axis()],
            import: ['~stylus/util']
          }
        }
      }))
    }
  },

  plugins: [
    '~/plugins/kute'
  ]
}
