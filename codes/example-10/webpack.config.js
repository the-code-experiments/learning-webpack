var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};
