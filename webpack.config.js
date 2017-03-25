let path = require('path')
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/videl.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: 'videl.js',
    library: 'videl',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
      modules: ['node_modules'],
      extensions: ['.vue', '.js']
  },
  resolveLoader: {
    root: 'node_modules',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          loader: ['css-loader']
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //       warnings: false
    //     }
    //   })
    new ExtractTextPlugin('videl.css'),
  ]
}
