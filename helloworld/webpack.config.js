let webpack = require('webpack')
let path = require('path')
let fs = require('fs')

const entryPath = path.resolve(__dirname, 'pages')

function getEntries (globPath, otherOpt) {
  let files = fs.readdirSync(globPath)
  let entries = {}
  for (let fileName of files) {
    let realPath = path.resolve(globPath, fileName)
    let isFile = fs.lstatSync(realPath).isFile()
    if (isFile) {
      let isEntryFile = /\.js$/.test(fileName)
      if (isEntryFile) {
        entries[fileName.replace(/\.js$/, '')] = realPath
      }
    }
  }
  return Object.assign(otherOpt || {}, entries)
}
console.log(path.resolve(__dirname, './'))
module.exports = {
  entry: getEntries(entryPath),
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[hash:base64:5]&-url'
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
  devtool: 'source-map'
}
