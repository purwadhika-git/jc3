const http = require("http");
const url = require("url");

http.createServer(function (req, res) {

    var param = url.parse(req.url, true).query;
    const get = param.get;

    if(get == "user"){
        const user = {
            name : "User 1",
            address : "Address 1"
        }

        res.writeHead(200, { "Content-Type" : "application/json" });
        res.write(JSON.stringify(user));
        res.end();
    }
    else if(get == "product"){
        const product = {
            name : "Product 1",
            price : 190000
        }

        res.writeHead(200, { "Content-Type" : "application/json" });
        res.write(JSON.stringify(product));
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type" : "text/html" });
        res.write("Not Found !!");
        res.end();
    }

}).listen(8080)