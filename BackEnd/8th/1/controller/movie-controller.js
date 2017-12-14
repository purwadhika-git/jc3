const express = require("express")
const movieDB = require("../model/movie-db-mongoose");
const Movie = require("../model/movie");

const router = express.Router();


router.get("/movie", (req, res) => {
    movieDB.GetAllMovie((result) => {
        res.send(result);
    });
})

router.get("/movie/:id", (req, res) => {
    movieDB.GetMovieById(req.params.id, (result) => {
        res.send(result);
    });
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
    let newObj = new Movie(req.body.title, 
        req.body.synopsis, 
        req.body.duration, 
        req.body.rating, 
        req.body.listOfActor, 
        req.body.genre);
    
    movieDB.UpdateMovie(req.body._id, newObj, (result)=>{
        res.send(result);
    })
})

router.delete("/movie/:id", (req, res) => {
    movieDB.DeleteMovie(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function(){
    return router;
})();