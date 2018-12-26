const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cleanOptions = {
  verbose: true,
  dry: false
}

const APP_DIR = path.resolve(__dirname, './src/client')

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'var',
    library: 'XLSX'
  },
  node: {
    fs: 'empty',
    process: false,
    Buffer: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /(\.css|.scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|jpg)$/,
        loader: 'file-loader',
        exclude: [/node_modules/]
      }
    ],
    noParse: [
      /xlsx.core.min.js/,
      /xlsx.full.min.js/
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), cleanOptions),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'config/index.html')
    })
  ],
  externals: [
    { './cptable': 'var cptable' },
    { '../xlsx.js': 'var _XLSX' },
    { './jszip': 'jszip' }
  ]
}
