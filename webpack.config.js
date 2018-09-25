/*eslint-env node*/

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const theConfig = {
  devServer: {
    open: true,
    openPage: 'single',
  },
  context: path.resolve(__dirname, './'),
  entry: {},
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              root: resolve('src'),
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
      },
    ],
  },

  plugins: [],
}

glob.sync('./example/*.js').forEach((path) => {
  const name = path.replace('./example/', '').replace(/\.js/, '')

  theConfig.entry[name] = path

  const chunks = [name]
  // chunks.unshift('vendors')
  // chunks.unshift('manifest')

  theConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: './' + name + '/index.html',
      template: path.replace(/\.js/, '.html'),
      inject: 'body',
      // favicon: './src/logo.png',
      chunksSortMode: 'manual',
      chunks,
    }),
  )
})

module.exports = theConfig
