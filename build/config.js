const base = require('./webpack.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const builds = {
  'dev': {
    filename: 'videl.js',
    libraryTarget: 'umd'
  },
  'prod': {
    filename: 'videl.min.js',
    libraryTarget: 'umd',
    env: 'production'
  }
}

function genConfig (opts) {
  const config = merge({}, base, {
    output: {
      filename: opts.filename,
      libraryTarget: opts.libraryTarget
    }
  })

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': opts.env || 'development'
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: false,
      progress: true,
      hide_modules: true
    }),

    new ExtractTextPlugin({
        filename: 'videl.css'
    }),
  ])
  if (opts.env) {
    config.plugins = config.plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),

      // new webpack.LoaderOptionsPlugin({
      //   minimize: true,
      //   progress: true,
      //   hide_modules: true
      // }),

      // new ExtractTextPlugin({
      //     filename: 'videl.min.css'
      // }),
    ])
  }

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET])
} else {
  exports.getBuild = name => genConfig(builds[name])
  exports.getAllBuilds = () => Object.keys(builds).map(name => genConfig(builds[name]))
}
