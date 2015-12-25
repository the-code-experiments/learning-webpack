// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var open = require("open");

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:3000'
    // }) // plugin is having issue https://github.com/baldore/open-browser-webpack-plugin/issues/4
  ],
  devServer: {
    port: 3000 // setting webpack-dev-server port
  }
};

open("http://localhost:3000", "firefox");
