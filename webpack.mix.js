let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const path = require('path')

mix.webpackConfig({
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    library: 'Vuetify'
  },
});

mix.js('src/videl.js', 'dist/')
   .sass('src/videl.scss', 'dist/');
