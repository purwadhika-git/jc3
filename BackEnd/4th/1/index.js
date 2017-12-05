const http = require("http");
const url = require("url");
const request = require("request");
const fs = require("fs");

// http.createServer(function (req, res) {
    
//     res.write("Hello World !!");
//     res.end();

// }).listen(8000);

var server = http.createServer(function (req, res) {
    try {

        var param = url.parse(req.url, true).query;
        const command = param.command;
        
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
            res.writeHead(200, { "Content-Type" : "text/html" });
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
            res.writeHead(200, { "Content-Type" : "application/json" });
            res.write(JSON.stringify(array));
            res.end();
        }
        else if (command == "get") {
            var array = fetchData();
            res.writeHead(200, { "Content-Type" : "application/json" });
            for (let i = 0; i < array.length; i++) {
                if (array[i].id == param.id) {
                    res.write(JSON.stringify(array[i]));
                    break;
                }
            }

            res.end();
        }
        else if (command == "remove") {
            var array = fetchData();
            res.writeHead(200, { "Content-Type" : "text/html" });

            for (let i = 0; i < array.length; i++) {
                if (array[i].id == param.id) {
                    res.write("User " + array[i].name + " removed from database.\n");
                    array.splice(i, 1);
                    break;
                }
            }

            fs.writeFileSync("data.json", JSON.stringify(array));

            res.write("data.json updated !");
            res.end();
        }
        else {
            res.writeHead(404, { "Content-Type" : "text/html" });
            res.write("Command not found !");
            res.end();
        }
        
    } catch (error) {
        res.writeHead(500, { "Content-Type" : "text/html" });
        res.write("Error !!");
        res.end();
    }

});

server.listen(8000);
