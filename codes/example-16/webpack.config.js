module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style?css!csslint'
    }]
  }
};
