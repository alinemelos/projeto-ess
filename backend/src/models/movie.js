const { v4: uuidv4 } = require('uuid');

class Movie {
    constructor(movie_id, name, year, duration, genre, synopsis = [], image, platforms = []) {
        this.movie_id = uuidv4(); // Gerar automaticamente um UUID
        this.movie_id = movie_id;
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.synopsis = synopsis;
        this.image = image;
        this.platforms = platforms;
    }
}

module.exports = Movie;