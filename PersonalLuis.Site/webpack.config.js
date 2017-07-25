const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProvidePlugin = require('webpack-provide-global-plugin');

module.exports = {
  entry: './wwwroot/index.js',
  output: {
    filename: 'bundle.js',
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
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
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
          require.resolve('jquery.nicescroll'),
          require.resolve('jquery-hammerjs'),
          require.resolve('isotope-layout'),
        ],
        use: ['imports-loader?define=>false'],
      },
      //{
      //    test: [
      //        require.resolve('jquery.nicescroll'),
      //        /waypoints/
      //    ],
      //    use: ['script-loader'],
      //},
      {
        test: [
          require.resolve('wowjs'),
        ],
        use: ['imports-loader?this=>window'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('all.css'),
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
