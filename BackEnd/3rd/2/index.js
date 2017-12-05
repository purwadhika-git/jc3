const request = require("request");

console.log("start !");

request({
    //url : "https://jsonplaceholder.typicode.com/users",
    url : "https://maps.googleapis.com/maps/api/geocode/json?address=tangerang",
    json : true
}, (error, response, body) => {
    //console.log("berhasil ")
    console.log(JSON.stringify(body, undefined, 2));
});

console.log("finish !");