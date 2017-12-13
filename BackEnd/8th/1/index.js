const express = require("express");
const bodyParser = require("body-parser");
const movieController = require("./controller/movie-controller")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api", movieController)

app.listen(3001);