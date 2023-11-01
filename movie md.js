//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)


// a) Write a constructor for the class Movie, which takes a String 
//representing the title of the movie, a String representing the studio,and a 
//String representing the rating as its arguments, and sets the respective class 
//properties to these values.

 
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movie1 = new Movie("Iron Man", "Marvel Studio.", "PG-13");

console.log("Movie Title:", movie1.title);
console.log("Studio:", movie1.studio);
console.log("Rating:", movie1.rating);



//b.The constructor for the class Movie will set the class property rating to "PG"
 //as default when no rating is provided with example


 class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
}

const movie1 = new Movie("Spider Man", "Marvel Studio");


console.log("Movie Title:", movie1.title);
console.log("Studio:", movie1.studio);
console.log("Rating:", movie1.rating); 



// c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only  those movies in the input array with a rating of "PG".
//those movies in the input array with a rating of "PG".You may assume the input
//array is full of Movie instances. The returned array need not be full.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "R"),
    new Movie("Movie 3", "Studio C", "PG"),
    new Movie("Movie 4", "Studio D", "G"),
    new Movie("Movie 5", "Studio E", "PG-13")
];

const pgMovies = Movie.getPG(movies);

console.log("Movies with rating 'PG':", pgMovies);



//d). Write a piece of code that creates an instance of the class Movie with the title
// “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log("Movie Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);
