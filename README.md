# Learning Webpack - Module Bundler

This training kit has been developed for those who:
* already have the basic knowledge of JavaScript.
* want to write JavaScript in modular way and bundle it for production use.

This training kit includes a set of example Webpack configurations which are listed in below [Table of Content](https://github.com/Code-by-practice/learning-webpack#table-of-contents)

## Prerequisites installation

Assuming that Node.js & npm are already installed & running.

```
npm install -g webpack webpack-dev-server
```

## Table of Contents
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
|9|```webpack```|Code splitting and loading files on demand, Open browser and try ```localhost:8080``` see content-1 is loaded but not content-2, Now try execute ```localhost:8080/#load``` see content-1 and content-2 are both loaded|
|10|```webpack```|Shows how to load 3rd-party plugins|
|11|```webpack```|Shows how to load JSON file|
|12|```webpack```|Shows how to load raw file|
|13|```webpack```|Shows how to configure jshint & JSCS loaders for JavaScript linting|
|14|```webpack```|Shows how to load Handlebars templates file|
|15|```webpack```|Shows how to load LESS loader|
|16|```webpack```|Shows how to configure CSSLint loader for CSS linting|
|17|```webpack```|Shpws how to configure TypeScript loader for TS files|

## Contributors

Developed & maintained by author: Ashwin Hegde & [Contributors](//github.com/Code-by-practice/learning-webpack/graphs/contributors)

We appreciate all kinds of feedback and contributions. Thank you for using and supporting this project.

To request a feature, ask a question, or report errors, please send a pull-request on "develop" branch or post it on following link, or vote for the ones that are already registered.

[https://github.com/Code-by-practice/learning-webpack/issues](https://github.com/Code-by-practice/learning-webpack/issues)

## License

The MIT License (MIT)

Copyright (c) 2016 Ashwin Hegde
