var webpack = require('webpack');

var webpackConfig = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'wildcard-regex.js',
    library: 'wildcardRegex',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'development'
      }
    })
  ]
};

if (process.env.NODE_ENV == 'production') {
  webpackConfig.devtool = 'source-map';
  webpackConfig.output.filename = 'wildcard-regex.min.js';
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    })
  ]
}

module.exports = webpackConfig;
