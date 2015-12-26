module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.handlebars$/,
      loader: "handlebars-loader"
    }]
  }
};
