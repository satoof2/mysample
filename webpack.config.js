const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
          '111':'./src/main.js',
        } ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loaders: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.vue', '.json', 'scss', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './',
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
  },
  externals: {
    "aaaa":"aaaa"
  }
};
