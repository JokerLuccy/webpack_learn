const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
process.env.NODE_ENV = 'development'
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'

        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ],
  mode: 'development',

}