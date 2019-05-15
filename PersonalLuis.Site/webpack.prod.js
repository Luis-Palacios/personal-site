const Merge = require('webpack-merge');
const path = require('path');
const CommongConfig = require('./webpack.config');

module.exports = Merge(CommongConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot', 'dist'),
  },
});
