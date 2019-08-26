const path = require('path')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'zmethods.umd.js',
    library: 'zmethods',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TypedocWebpackPlugin(),
    new TerserPlugin({
      test: /\.ts(\?.*)?$/i,
      cache: true,
      parallel: true,
      sourceMap: false,
      terserOptions: {
        warnings: false,
        output: {
          comments: false
        }
      }
    })
  ]
}