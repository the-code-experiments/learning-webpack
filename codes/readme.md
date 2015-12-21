|Example No.|Execution Command|Comments|
|-----------|-----------------|--------|
|1, 2| webpack entry.js bundle.js| |
|3| |we need the ```css-loader``` to process CSS files. We also need the ```style-loader``` to apply the styles in the CSS file. They need to be installed locally, without ```-g```|
|4|webpack entry.js bundle.js --module-bind 'css=style!css' | if you are using ```bash``` then use single quotes in Command. Please see https://github.com/webpack/webpack/issues/1453 for more information|
|5|webpack ```OR``` webpack --progress --colors ```OR``` webpack --progress --colors --watch ```OR``` | |
|6|webpack-dev-server --progress --colors --watch|webpack-dev-server is a development server, it binds a small express server on localhost:8080 which serves your static assets as well as the bundle |
