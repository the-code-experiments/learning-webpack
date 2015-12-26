module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  }
};
