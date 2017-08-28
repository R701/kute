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
      config.resolve.alias['~utils'] = path.resolve(__dirname, '../src/utils')
      config.resolve.alias['~stylus'] = path.resolve(__dirname, '../src/stylus')
      config.resolve.alias['~directives'] = path.resolve(__dirname, '../src/directives')
      config.resolve.alias['~mixins'] = path.resolve(__dirname, '../src/mixins')
      config.resolve.alias['~assets'] = path.resolve(__dirname, '../src/assets')
      config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets')
      config.resolve.alias['stylus'] = path.resolve(__dirname, '../src/stylus')
      config.resolve.alias['settings'] = path.resolve(__dirname, '../src/stylus/0_settings')
      config.resolve.alias['tools'] = path.resolve(__dirname, '../src/stylus/1_tools')
      config.resolve.alias['generic'] = path.resolve(__dirname, '../src/stylus/2_generic')
      config.resolve.alias['element'] = path.resolve(__dirname, '../src/stylus/3_element')
      config.resolve.alias['object'] = path.resolve(__dirname, '../src/stylus/4_object')
      config.resolve.alias['trumps'] = path.resolve(__dirname, '../src/stylus/5_trumps')
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
