const Movie = require("../model/movie-mongoose");

var AddNewMovie = (obj, callback) => {
    
    let newObj = new Movie(obj);

    newObj.save((error) => {
        if(error) throw error;
        callback(newObj);
    });

}

var GetMovieById = (id, callback) => {
    
    Movie.findById(id, (error, result) => {
        if(error) throw error;
        callback(result);
    });

}

var GetAllMovie = (callback) => {
    Movie.find({}, (error, result) => {
        if(error) throw error;
        callback(result);
    });
}

var DeleteMovie = (id, callback) => {
    Movie.findByIdAndRemove(id, (error) => {
        if(error) throw error;
        callback("Movie Deleted !")
    });
}

var UpdateMovie = (id, newObj, callback) => {
    // Movie.findById(id, (error, result) => {
    //     if(error) throw error;

    //     result.title = newObj.title;
    //     result.synopsis = newObj.synopsis;
    //     result.duration = newObj.duration;
    //     result.rating = newObj.rating;
    //     result.genre = newObj.genre;
    //     result.listOfActor = newObj.listOfActor;

    //     result.save((error) => {
    //         if(error) throw error;
    //         callback(result);
    //     })
    // });

    Movie.findByIdAndUpdate(id, newObj, (error, result)=>{
        if(error) throw error;
        callback(result);
    });

}

module.exports = {
    AddNewMovie,
    GetMovieById,
    GetAllMovie, 
    DeleteMovie,
    UpdateMovie
}