class Movie {
    constructor (title, synopsis, duration, rating, actors, genre){
        this.title = title;
        this.synopsis = synopsis;
        this.duration = duration;
        this.rating = rating;
        this.listOfActor = actors;
        this.genre = genre;
    }
}

// const myMovie = new Movie("Movie 1", "", 120, 5, ["Actor 1", "Actor 2"], "Action");
// console.log(myMovie);

module.exports = {
    Movie
}