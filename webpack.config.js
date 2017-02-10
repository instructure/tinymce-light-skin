var webpack = require('webpack');

module.exports = {
  entry: './src/skin.js',
  output: {
    path: './lib',
    filename: 'skin.js',
    library: 'tinymce-light-skin',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader/useable!css-loader'},
      {test: /\.gif/, loader: 'url-loader'},
      {test: /\.woff/, loader: 'base64-font-loader'}
    ]
  }
}
