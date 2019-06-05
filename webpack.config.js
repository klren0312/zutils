const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'zmethods.min.js',
    library: 'zmethods',
    libraryTarget: 'umd'
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
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
          comments: false,
          beautify: false
        }
      }
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      algorithm: 'gzip'
    }),
    new CleanWebpackPlugin()
  ]
}