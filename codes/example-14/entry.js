var contentTemplate = require('./content.handlebars');

document.addEventListener("DOMContentLoaded", function() {

  var container = document.getElementById('container');
  container.innerHTML = contentTemplate({
    name: "Ashwin Hegde",
    job: "Software Engineer"
  })
  
});
