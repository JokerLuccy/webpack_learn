/**
 * 运行webpack 指令，加载里面的配置
 * 所有的构建工具都是基于nodejs 平台运行的
 */
const { resolve } = require('path')
module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 详细loader配置,use 中执行顺序 从后往前
      {
        // 正则匹配
        test: /\.css$/,
        // 使用那些loader处理
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 正则匹配
        test: /\.less$/,
        // 使用那些loader处理
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  // 插件
  plugins: [],
  mode: 'development'
}