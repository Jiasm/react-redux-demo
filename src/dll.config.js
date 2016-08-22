const webpack = require('webpack')
var path = require('path')

const vendors = [
  'react',
  'redux',
  'react-dom',
  'react-redux',
  'react-router'
    // ...其它库
]

module.exports = {
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    'lib': vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ]
}
