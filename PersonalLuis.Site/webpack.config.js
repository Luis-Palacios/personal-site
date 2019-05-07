const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProvidePlugin = require('webpack-provide-global-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: './wwwroot/index.js',
    blog: './wwwroot/app/blog.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot', '.temp'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              // hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: [
          require.resolve('isotope-layout'),
        ],
        use: ['imports-loader?define=>false'],
      },
      {
        test: [
          require.resolve('wowjs'),
        ],
        use: ['imports-loader?this=>window'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      masonry: 'masonry-layout',
      isotope: 'isotope-layout',
    },
  },
};
