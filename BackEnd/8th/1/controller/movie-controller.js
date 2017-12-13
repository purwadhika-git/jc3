const express = require("express")
const movieDB = require("../model/movie-db");
const Movie = require("../model/movie");

const router = express.Router();


router.get("/movie", (req, res) => {
    
})

router.post("/movie", (req, res) => {
    
    let obj = new Movie(req.body.title, 
                        req.body.synopsis, 
                        req.body.duration, 
                        req.body.rating, 
                        req.body.listOfActor, 
                        req.body.genre);
    
    movieDB.AddNewMovie(obj, function (result){
        res.send(result);
    });

})

router.put("/movie", (req, res) => {
    
})

router.delete("/movie", (req, res) => {
    
})


module.exports = (function(){
    return router;
})();