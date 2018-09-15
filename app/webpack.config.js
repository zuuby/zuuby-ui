const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  favicon: './public/favicon.ico',
});

const miniCssPlugin = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(mov|mp4)/,
        use: {
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    htmlPlugin,
    miniCssPlugin,
  ],
};
