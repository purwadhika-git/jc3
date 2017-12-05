console.log("Hello from user.js");

module.exports.name = "User 1";
module.exports.address = "Address 1";

// module.exports.getName = function(value1){
//     return "My Name is " + this.name;
// }

module.exports.getName = (value1) => {
    return "My Name is " + value1;
}

// regular syntax
function funct1() {
}

// regular syntax
var funct2 = function(){
}

// ES6
var funct3 = () => {
}


