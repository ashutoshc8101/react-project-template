const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry : {
    vendor : [
      'react', 'react-dom', 'bootstrap/dist/css/bootstrap.css', 'bootstrap/dist/js/bootstrap.js'
    ],
    main : path.resolve(__dirname, 'src/main.jsx')

  },

  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : '[name].bundle.js?[hash]'
  },

  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use : [
          'babel-loader'
        ]
      },
      {
        test : /\.s?css$/,
        use : ['style-loader','css-loader','sass-loader']
      },
      {
        test : /\.pug$/,
        use : 'pug-loader'
      },
      {
        test : /\.(png|jpg|svg|gif)$/,
        use : [{
          loader : 'file-loader',
          options : {
            name : '[name].[hash].[ext]'
          }
        }]
      },
      {
        test : /\.(eot|svg|ttf|woff|woff2)$/,
        use : [{
          loader : 'file-loader',
          options : {
            name : '[name].[hash].[ext]'
          }
        }]
      }
    ]
  },

  devtool : 'eval-source-map',

  devServer : {
    port : 3200,
    hot : true
  },

  plugins : [
    new HtmlWebpackPlugin({
      title : 'react-webpack',
      template : path.resolve(__dirname, 'src/index.pug')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name : 'vendor'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name : 'common'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

  ]

};
