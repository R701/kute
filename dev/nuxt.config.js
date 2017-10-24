const path = require('path')
const webpack = require('webpack')
const axis = require('axis')

const resolve = path.resolve.bind(path, __dirname)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kute - A vue.js component kit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Main page for project kute, a vue.js component kit with dark cool theme.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_408131_mk89leo60fpyzaor.css'
      }
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
    publicPath: '/kute/_nuxt/',
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      config.resolve.modules = [
        resolve('./node_modules'),
        resolve('./../node_modules')
      ]

      config.resolve.alias.kute = resolve('./../src')
      config.resolve.alias['~'] = resolve('./../src')
      config.resolve.alias['~components'] = resolve('./../src/components')
      config.resolve.alias['~utils'] = resolve('./../src/utils')
      config.resolve.alias['~stylus'] = resolve('./../src/stylus')
      config.resolve.alias['~directives'] = resolve('./../src/directives')
      config.resolve.alias['~mixins'] = resolve('./../src/mixins')
      config.resolve.alias['~assets'] = resolve('./../src/assets')
      config.resolve.alias['assets'] = resolve('./../src/assets')
      config.resolve.alias['stylus'] = resolve('./../src/stylus')
      config.resolve.alias['settings'] = resolve('./../src/stylus/0_settings')
      config.resolve.alias['tools'] = resolve('./../src/stylus/1_tools')
      config.resolve.alias['generic'] = resolve('./../src/stylus/2_generic')
      config.resolve.alias['element'] = resolve('./../src/stylus/3_element')
      config.resolve.alias['object'] = resolve('./../src/stylus/4_object')
      config.resolve.alias['trumps'] = resolve('./../src/stylus/5_trumps')
      config.resolve.extensions.push('.styl')
      config.plugins.push(
        new webpack.LoaderOptionsPlugin({
          options: {
            stylus: {
              preferPathResolver: 'webpack',
              use: [axis()],
              import: ['~stylus/util']
            }
          }
        })
      )
    }
  },

  plugins: ['~/plugins/kute'],

  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/kute/'
  }
}
