const arg = require("yargs").argv;
const ts = require("./task.js");

const command = arg.command;

if (command == "add") {
    
    console.log("Add Task")
    ts.AddTask(arg.name);

}
else if (command == "list") {
    console.log("Get all data");
    ts.GetAll();
}
else if (command == "remove") {
    console.log("Remove data");
    ts.Remove(arg.timestamp);
}
else if (command == "get") {
    console.log("Get data");
    ts.Get(arg.timestamp);
}
else {
    console.log("Command not found !")
}

