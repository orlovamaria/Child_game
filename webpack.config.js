const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_start: path.resolve(__dirname, './src/index_start.js'),
    index_first_level: path.resolve(__dirname, './src/index_first_level.js'),
    index_second_level: path.resolve(__dirname, './src/index_second_level.js'),
    index_third_level: path.resolve(__dirname, './src/index_third_level.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/start.html'),
      filename: 'start.html',
      chunks: ['index_start']
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/first_level.html'),
      filename: 'first_level.html',
      chunks: ['index_first_level']
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/second_level.html'),
      filename: 'second_level.html',
      chunks: ['index_second_level']
    }),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, './src/third_level.html'),
      filename: 'third_level.html',
      chunks: ['index_third_level']
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/images", to: "images"
        }
      ]
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],  //(если вы используете windows7, строку 'sass-loader' удалите.) 'style-loader', 'css-loader', 'sass-loader'
      }
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, 'dist'),
    static: './dist',
    open: true, compress: true, hot: true, port: 8081,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all'
        }
      }
    }
  }
}