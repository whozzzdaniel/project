'use strict';

const personalMoviesDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
			personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: () => {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Какой фильм вы посмотрели недавно?', ''),
						b = +prompt('На сколько его оцените?', '');
			
			if (a != '' && a != null && a!= ' ' && a.length <= 50 && isNaN(b) === false) {
				personalMoviesDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
				continue;
			}
		}
	},
	detectPersonalLvl: () => {
		if (personalMoviesDB.count < 10) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMoviesDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: () => {
		if (personalMoviesDB.privat === false) {
			console.log(personalMoviesDB);
		}
	},
	writeYourGenres: () => {
		for (let i = 0; i < 3; i++) {
			const a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');

			if (a != '' && a != null && a!= ' ' && a.length <= 50) {
				personalMoviesDB.genres.push(a);
			} else {
				console.log('Вы ввели некорректные данные или не ввели их вовсе');
				i--;
				continue;
			}
		}
		
		personalMoviesDB.genres.forEach((item, index) => {
			console.log(`Любимый жанр #${index+1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: () => {
		if (personalMoviesDB.privat) {
			personalMoviesDB.privat = false;
		} else {
			personalMoviesDB.privat = true;
		}
	}
};

personalMoviesDB.start();
personalMoviesDB.writeYourGenres();

personalMoviesDB.showMyDB();