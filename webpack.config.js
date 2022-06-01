const HtmlWebPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  plugins: [
    new HtmlWebPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      title: 'hello react'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png)$/,
        use: 'file-loader'
      }
    ]
  }
}