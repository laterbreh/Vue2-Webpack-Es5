var webpack = require('webpack');
module.exports = {
  entry: './app/entry.js',
  output: {
    path: __dirname + '/app/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders:[{
      test: /\.html$/,
      loader: 'raw'
    }]
  }/*,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]*/
};
