'use strict';

const path = require('path');

module.exports = {
  entry: [
    './../@polymer/polymer/polymer-element.html'
  ],
  output: {
    path: path.join(__dirname, '.'),
    filename: 'polymer-element.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.html$/,
      loaders: ['wc-loader']
    }]
  },
  resolve: {
    mainFields: ['browserify', 'browser', 'module', 'main']
  }
}
