const express = require("express");
const request = require("request");
const fs = require("fs");

const app = express();

app.use((req, res, next) => {
    next();
});

app.get("/", (req, res) => {
    try {
        const command = req.query.command;
        
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
            res.write("Downloading .. !!\n");
            request({
                url: "https://jsonplaceholder.typicode.com/users",
                json: true
            }, (error, response, body) => {
                fs.writeFileSync("data.json", JSON.stringify(body));
                res.write("Finish .. !!");
                res.end();
            });
        }
        else if (command == "list") {
            var array = fetchData();
            res.send(array);
        }
        else if (command == "get") {
            var array = fetchData();
            for (let i = 0; i < array.length; i++) {
                if (array[i].id == req.query.id) {
                    res.send(array[i]);
                    break;
                }
            }
        }
        else if (command == "remove") {
            var array = fetchData();
            for (let i = 0; i < array.length; i++) {
                if (array[i].id == req.query.id) {
                    res.send("User " + array[i].name + " removed from database.\n");
                    array.splice(i, 1);
                    break;
                }
            }
            fs.writeFileSync("data.json", JSON.stringify(array));
        }
        else {
            res.status(404).send("Command Not Found !!")
        }
        
    } catch (error) {
        res.status(500).send("Server Error !!")
    }
});

app.get("/user", (req, res) => {
    console.log("Get Request From /user ");

    const obj = {
        id : req.query.id,
        name : "User 1",
        phoneNumber : "081726123672"
    };

    res.status(404).send(obj);

});

app.listen(4000, () => {
    console.log("Starting .. ")
});