console.log("Hello World");

console.log(require('./content-1.js'));

if(window.location.href.indexOf('load') !== -1 ) {
    console.log(require('./content-2.js'));
}
