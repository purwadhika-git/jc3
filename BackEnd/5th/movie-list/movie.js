const fs = require("fs");

class Movie {
    constructor (title, synopsis, duration, rating, actors, genre){
        this.id = new Date().valueOf();
        this.title = title;
        this.synopsis = synopsis;
        this.duration = duration;
        this.rating = rating;
        this.listOfActor = actors;
        this.genre = genre;
    }
}

var fetchData = () => {
    try {
        return JSON.parse(fs.readFileSync("data.json"));
    } catch (error) {
        return [];
    }
};

var addNewData = (obj) => {
    let array = fetchData();
    array.push(obj);
    fs.writeFileSync("data.json", JSON.stringify(array));
}

var updateData = (obj, id) => {
    let array = fetchData();
    let result = {};

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].id + " " + id);
        if (array[i].id == id) {
            result = array[i];

            array[i].title = (obj.title) ? obj.title : array[i].title;
            array[i].synopsis = (obj.synopsis) ? obj.synopsis : array[i].synopsis;
            array[i].duration = (obj.duration) ? obj.duration : array[i].duration;
            array[i].rating = (obj.rating) ? obj.rating : array[i].rating;
            array[i].listOfActor = (obj.listOfActor) ? obj.listOfActor : array[i].listOfActor;
            array[i].genre = (obj.genre) ? obj.genre : array[i].genre;
            
            break;
        }
    }

    fs.writeFileSync("data.json", JSON.stringify(array))
    return result;
}

var deleteData = (id) => {
    let array = fetchData();
    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            result = array[i];
            array.splice(i,1);
            break;
        }
    }
    fs.writeFileSync("data.json", JSON.stringify(array))
    return result;
}

var getById = (id) => {
    let array = fetchData();
    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            result = array[i];
            break;
        }
    }
    
    return result;
}

module.exports = {
    Movie,
    addNewData,
    fetchData,
    getById,
    updateData, 
    deleteData
}