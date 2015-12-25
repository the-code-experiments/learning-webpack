module.exports = {
  entry: {
    bundle1: './entry-1.js',
    bundle2: './entry-2.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  "module": {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
