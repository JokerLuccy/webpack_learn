const { resolve } = require('path')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 使用多个loader 处理  使用use
      // 单个loader 处理 直接使用loader
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          esModule: false,
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    port: 8080,
    open:true
  }
}