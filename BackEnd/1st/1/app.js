console.log("Hello World !!");

const fs = require("fs");
const os = require("os");
const user = require("./user.js");

console.log(`Name : ${ user.name }`);
console.log(user.getName("User 2"));


//let user = os.userInfo();
//console.log(user);

// Regular Syntax
// fs.appendFileSync("hello.txt", "Hello " + user.username + " !");

// ES6 = Ecma Script 6
//fs.appendFileSync("hello.txt", `Hello ${ user.username } !`);

