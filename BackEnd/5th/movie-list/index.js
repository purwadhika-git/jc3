const express = require("express");
const bodyParser = require("body-parser");
const movie = require("./movie")

const app = express();

const myMovie = new movie.Movie("Movie 1", "", 120, 5, ["Actor 1", "Actor 2"], "Action");
//console.log(myMovie);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.post("/new", (req, res) => {
    console.log(req.body.title);
    res.send("Berhasil !!");
});

app.get("/all", (req, res) => {});
app.get("/details", (req, res) => {});
app.put("/update", (req, res) => {});
app.delete("/delete", (req, res) => {});

// movie list
// - add new movie [POST]
// - get all movie [GET]
// - get details [GET]
// - update movie [POST / PUT]
// - delete movie [POST / DELETE]

// movie : 
// - title
// - synopsis
// - duration
// - rating (1 - 5)
// - list of actor (array string)
// - genre 

app.listen(3000);