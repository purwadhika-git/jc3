const arg = require("yargs").argv;
const request = require("request");
const fs = require("fs");

const command = arg.command;

var fetchData = () => {
    let array = [];
    try {
        const data = fs.readFileSync("data.json");
        array = JSON.parse(data);
    } catch (error) {
        array = [];
    }

    return array;
}


if (command == "download") {
    console.log("Download starting ... ")
    request({
        url: "https://jsonplaceholder.typicode.com/users",
        json: true
    }, (error, response, body) => {
        fs.writeFileSync("data.json", JSON.stringify(body));
        console.log("Download data complete !!")
    });
}
else if (command == "list") {
    var array = fetchData();
    array.forEach(element => {
        console.log(element.id + " " + element.name)
    });
}
else if (command == "get") {
    var array = fetchData();
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == arg.id) {
            console.log(array[i].id + " " + array[i].name)
            break;
        }
    }
}
else if (command == "remove") {
    var array = fetchData();
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == arg.id) {
            console.log("User " + array[i].name + " removed from database.")
            array.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync("data.json", JSON.stringify(array));
    console.log("Data removed !");
}
else {
    console.log("Command not found !")
}
