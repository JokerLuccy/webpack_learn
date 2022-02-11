const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: []
  },
  plugins: [
    // 创建一个空的html文件,自动引入打包输出所有的资源(js/css)
    new HtmlWebpackPlugin({
      // 复制 ./src/index.html 文件,自动引入打包输出所有的资源(js/css)
      template: './src/index.html'
    })
  ],
  mode: 'development'
}