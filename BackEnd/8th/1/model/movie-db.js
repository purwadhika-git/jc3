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

var GetMovieById = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("movie").findOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

var GetAllMovie = (callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        db.collection("movie").find({}).toArray((err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

var DeleteMovie = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("movie").deleteOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

var UpdateMovie = (id, newObj, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("movie").updateOne({ _id : o_id}, newObj, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

module.exports = {
    AddNewMovie,
    GetMovieById,
    GetAllMovie, 
    DeleteMovie,
    UpdateMovie
}