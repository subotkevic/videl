const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const banner =
  '/*!\n' +
  ' * Videl (https://github.com/subotkevic/videl)\n' +
  ' * (c) ' + new Date().getFullYear() + ' Artur Subotkevič\n' +
  ' * Released under the MIT License.\n' +
  ' */';

var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  devtool: '#source-map',
  watch: process.env.TARGET === 'dev',
  entry: {
    app: './src/videl.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    library: 'Videl'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue']
  },
  node: {
    fs: 'empty'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader'],
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          loader: ['css-loader!sass-loader']
        }),
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  plugins: [
    new webpack.BannerPlugin({
        banner: banner,
        raw: true,
        entryOnly: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
