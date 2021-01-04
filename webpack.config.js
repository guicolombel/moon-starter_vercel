const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './_includes/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, '_site/_includes/assets/js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
    }),
  ],
};