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
  devServer: {
    port: 8090
  },
  module: {
    rules: [
      {
        test: /\.(png)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}