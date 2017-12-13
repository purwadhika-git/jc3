const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017/movie";
const Movie = require("./movie");


var AddNewMovie = (obj, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        db.collection("movie").insertOne(obj, (err, res) => {
            if(err){
                throw err;
            }
            callback(res.ops[0]);
            db.close();
        });

    });
}

var GetMovieById = (id) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("movie").findOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            console.log(res)
            db.close();
        });

    });
}

GetMovieById('5a30d76ea04d542cbcff2610');

module.exports = {
    AddNewMovie
}