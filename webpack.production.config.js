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
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
