'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// Вариант решение через цикл while

/*
let counter = 0;

while (counter != 2) {
	const recentFilm = prompt('Какой фильм вы посмотрели недавно?', ''),
				recentFilmMark = +prompt('На сколько его оцените?', 0);

	if (recentFilm != '' && recentFilm != null && recentFilm.length <= 50 && isNaN(recentFilmMark) === false) {
		personalMoviesDB.movies[recentFilm] = recentFilmMark;
		counter++;
		console.log('done');
	} else {
		console.log('error');
		continue;
	}
}
*/

// Вариант решения через цикл do while

/*
let counter = 0;

do {
		const recentFilm = prompt('Какой фильм вы посмотрели недавно?', ''),
					recentFilmMark = +prompt('На сколько вы его оцените?', 0);
		
		if (recentFilm != '' && recentFilm != null && recentFilm.length <= 50 && isNaN(recentFilmMark) === false) {
			personalMoviesDB.movies[recentFilm] = recentFilmMark;
			counter++;
			console.log('done');
		} else {
			console.log('error');
			continue;
		}
	}
while (counter != 2);
*/


// Вариант решения через цикл for

for (let i = 0; i < 2; i++) {
	const recentFilm = prompt('Какой фильм вы посмотрели недавно?', ''),
				recentFilmMark = +prompt('На сколько его оцените?', 0);
	
	if (recentFilm != '' && recentFilm != null && recentFilm.length <= 50 && isNaN(recentFilmMark) === false) {
		personalMoviesDB.movies[recentFilm] = recentFilmMark;
		console.log('done');
	} else {
		console.log('error');
		i--;
		continue;
	}
} 

console.log(personalMoviesDB);

if (personalMoviesDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMoviesDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}