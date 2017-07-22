const Merge = require('webpack-merge');
const CommongConfig = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');

module.exports = Merge(CommongConfig, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot', 'dist'),
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
});
