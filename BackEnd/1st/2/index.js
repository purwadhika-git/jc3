console.log("This is index.js");

const _ = require("lodash");
const chalk = require('chalk');
const cal = require("./calculator.js");
const arg = require('yargs').argv;

console.log(_.isString(true));
console.log(_.isString("true"));
console.log(chalk.blue('Hello world!'));


// var command = process.argv[2];
// var a = parseInt(process.argv[3]);
// var b = parseInt(process.argv[4];

var command = arg.command;
var a = parseInt(arg.a);
var b = parseInt(arg.b);

if(command == "tambah"){
    console.log(cal.tambah(a, b));
}
else if(command == "kurang"){
    console.log(cal.kurang(a, b));
}
else if(command == "bagi"){
    console.log(cal.bagi(a, b));
}
else if(command == "kali"){
    console.log(cal.kali(a, b));
}
else{
    console.log("Command not recognized");
}
