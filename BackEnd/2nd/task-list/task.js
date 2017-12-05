const fs = require("fs");


var fetchData = () => {
    let taskArray = [];
    try {
        const data = fs.readFileSync("data.json");
        taskArray = JSON.parse(data);
    } catch (error) {
        taskArray = [];
    }

    return taskArray;
}

var saveData = (obj) => {
    fs.writeFileSync("data.json", JSON.stringify(obj));
}


var AddTask = (taskname) => {
    let newTask = {
        name : taskname,
        timestamp : new Date().valueOf()
    }

    let taskArray = fetchData();
    taskArray.push(newTask);

    saveData(taskArray);

}

var GetAll = () => {
    const taskArray = fetchData();
    for (let i = 0; i < taskArray.length; i++) {
        console.log(taskArray[i].name)
    }
}

var Remove = (timestamp) => {

    let taskArray = fetchData();

    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].timestamp == timestamp) {
            taskArray.splice(i,1);
            break;
        }
    }

    saveData(taskArray);
}

var Get = (timestamp) => {
    var taskArray = fetchData();

    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].timestamp == timestamp) {
            console.log(taskArray[i].name)
            break;
        }
    }
}

module.exports = {
    AddTask,
    GetAll,
    Remove,
    Get
}