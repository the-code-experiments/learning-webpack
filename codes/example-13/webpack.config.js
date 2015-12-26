module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jshint-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jscs-loader"
    }]
  },
  jshint: {
    camelcase: true,
    strict: true,
    unused: true
  },
  jscs: {
    validateIndentation: 2
  }
};
