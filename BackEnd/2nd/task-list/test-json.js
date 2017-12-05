const fs = require("fs")

var task = {
    name : "Task 1",
    timestamp : new Date().valueOf()
}

var taskStr = JSON.stringify(task);

console.log(`Task Type : ${ typeof task }  `);
console.log(task);

console.log(`TaskStr Type : ${ typeof taskStr }  `);
console.log(taskStr);


var obj = JSON.parse(taskStr);
console.log(obj);


fs.writeFileSync("data.json", taskStr);

var newObjStr = fs.readFileSync("data.json");

var newObj = JSON.parse(newObjStr);
