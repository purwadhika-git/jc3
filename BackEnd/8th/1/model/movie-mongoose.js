const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movie', { useMongoClient : true });
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    synopsis : String,
    duration : String,
    rating : Number,
    listOfActor : Array,
    genre : String,
});

var Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;