var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

function absPath(s) {
  return path.join(__dirname, s);
}

return {
  entry: path.resolve('index.js'),

  output: {
    path: absPath('public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx'},
      {test: /\.css$/, loader: ExtractText.extract('style', 'css?sourceMap')}
    ]
  },

  plugins: [
    new ExtractText('bundle.css', {allChunks: true}),
    new WebpackNotifierPlugin({alwaysNotify: true})
  ],

  resolve: {
    extensions: ['', '.js', '.css']
  },

  devtool: '#cheap-module-eval-source-map'
};
