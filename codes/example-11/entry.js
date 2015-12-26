var json = require('json!./content.json');

console.clear();
console.log("json data: ");
console.log(json);

for(var i=0; i<json.length;i++) {
    console.log("Employee Name: " + json[i].name + " - " + json[i].job);
}
