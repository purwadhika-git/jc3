const Movie = require("./model/movie-mongoose");

let movie = new Movie({
    title: 'New Movie',
    synopsis : '',
    duration : '',
    rating : 5,
    listOfActor : ['A', 'B'],
    genre : '',
});


movie.save(function(error){
    if(error){ 
        throw error
    };

    console.log("success !");

});

Movie.find({}, function(){
    
})


