// Converting JSON string to JavaScript object
let jsonData = '{"name":"Umesh", "age":21}';
let obj = JSON.parse(jsonData);

// Converting JavaScript object to JSON string
let newJson = JSON.stringify(obj);

console.log(obj.name);  // Output: Umesh
