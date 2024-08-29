let javascriptObject = {name:"Princess" ,age: 20, readyToCode:true};
let result = JSON.stringify(javascriptObject);
//console.log(result);

let jsonObject = '{"name":"Princess", "age":20, "readyToCode":true}';
let newResult = JSON.parse(result)
console.log(newResult); 