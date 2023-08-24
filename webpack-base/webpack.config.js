const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }
    ]
  },
  optimization: {},
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}