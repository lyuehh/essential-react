var path = require('path');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: './src/main',

  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.sass$/, loader: 'style!css!sass' },
      { test: /\.(eot|woff|ttf|svg|png|jpg)([\?]?.*)$/, loader: 'url-loader' }
    ]
  }
}
