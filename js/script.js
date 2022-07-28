'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 1);

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 1);
	}
}

function rememberMyFilms() {
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
}

function detectPersonalLvl() {
	if (personalMoviesDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов');
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMoviesDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

function showMyDB() {
	if (personalMoviesDB.privat === false) {
		console.log(personalMoviesDB);
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMoviesDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
	}
}

start();

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

rememberMyFilms();

writeYourGenres();

detectPersonalLvl();

showMyDB();