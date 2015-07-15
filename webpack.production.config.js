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
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
}
