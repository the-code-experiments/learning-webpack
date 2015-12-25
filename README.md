# Learning WEBPACK - MODULE BUNDLER

|Eg.No.|Execution Command|Comments|
|------|-----------------|--------|
|1|```webpack entry.js bundle.js```|Webpack will read entry.js file to build bundle.js|
|2|```webpack entry.js bundle.js -p``` |```-p``` is used for bundle minification|
|2|```webpack entry.js bundle.js -d```|```-d``` is used for bundle with source maps|
|3|```webpack entry.js bundle.js --progress```|Know the progress of building the bundle|
|3|```webpack entry.js bundle.js --colors```|Display text in colors|
|4|```webpack entry.js bundle.js```|we need the ```css-loader``` to process CSS files. We also need the ```style-loader``` to apply the styles in the CSS file. They need to be installed locally, without ```-g```|
|5|```webpack entry.js bundle.js --module-bind 'css=style!css'``` | This will simplify the CSS require path. Note: If you are using ```bash``` then use single quotes in Command. Please see https://github.com/webpack/webpack/issues/1453 for more information|
|6|```webpack```|Webpack will read ```webpack.config.js``` from the root directory to build bundle.js|
|7|```webpack --watch```|Will keep a watch on files to automatically rebuild the bundle|
|7|```webpack-dev-server```|webpack-dev-server is a development server, it binds a small express server on localhost:8080 which serves your static assets as well as the bundle|
|8|```webpack```|Multiple entry files are allowed|
