const numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели?', '');
const personlaMovieDB = {
    caunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};
const   a = prompt('Сколько фильмов вы просмотрели?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Сколько фильмов вы просмотрели?', ''),
        d = prompt('На сколько оцените его?', '');
personlaMovieDB.movies[a] = b;
personlaMovieDB.movies[c] = d;

console.log(personlaMovieDB);