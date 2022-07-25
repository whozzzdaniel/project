'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let recentFilm = prompt('Один из последних просмотренных фильмов?', '');
let recentFilmMark = +prompt('На сколько оцените его?', '');

personalMoviesDB.movies[recentFilm] = recentFilmMark;

recentFilm = prompt('Один из последних просмотренных фильмов?', '');
recentFilmMark = +prompt('На сколько оцените его?', '');

personalMoviesDB.movies[recentFilm] = recentFilmMark;

console.table(personalMoviesDB);