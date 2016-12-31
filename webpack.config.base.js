const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
    publicPath: '/assets/',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: []
  },
  stats: 'normal',
  cache: false,
  plugins: []
};


module.exports = config;
