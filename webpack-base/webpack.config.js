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
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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