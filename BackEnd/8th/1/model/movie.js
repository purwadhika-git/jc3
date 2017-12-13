module.exports = class Movie {
    constructor (title, synopsis, duration, rating, actors, genre){
        this.title = title;
        this.synopsis = synopsis;
        this.duration = duration;
        this.rating = rating;
        this.listOfActor = actors;
        this.genre = genre;
    }
}