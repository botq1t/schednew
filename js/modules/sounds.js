const sound = {
	'Пилипчук': [
		new Audio('audio/sounds/pepuk-1.mp3'),
		new Audio('audio/sounds/pepuk-2.mp3'),
		new Audio('audio/sounds/cunt.mp3'),
		new Audio('audio/sounds/chert.mp3'),
		new Audio('audio/sounds/rat.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
	],
	'Барабан': [
		new Audio('audio/sounds/baraban-1.mp3'),
		new Audio('audio/sounds/rat.mp3'),
	],
	'Вишневский': [
		new Audio('audio/sounds/heroes.mp3'),
		new Audio('audio/sounds/maslyak.mp3'),
		new Audio('audio/sounds/respect.mp3'),
	],
	'Лазовский': [
		new Audio('audio/sounds/heroes.mp3'),
		new Audio('audio/sounds/maslyak.mp3'),
		new Audio('audio/sounds/respect.mp3'),
	],
	'Александров': [
		new Audio('audio/sounds/maslyak.mp3'),
	],
	'Науменко': [
		new Audio('audio/sounds/cunt.mp3'),
		new Audio('audio/sounds/chert.mp3'),
		new Audio('audio/sounds/zavtra.mp3'),
		new Audio('audio/sounds/want-to-die-1.mp3'),
		new Audio('audio/sounds/want-to-die-2.mp3'),
	],
	'Дубовский': [
		new Audio('audio/sounds/chert.mp3'),
		new Audio('audio/sounds/rat.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
		new Audio('audio/sounds/dubec.mp3'),
	],
	'Худолей': [
		new Audio('audio/sounds/blevon.mp3'),
	],

	'Суббота': [
		new Audio('audio/sounds/saturdays.mp3'),
		new Audio('audio/sounds/saturday-salt.mp3'),
		new Audio('audio/sounds/godno.mp3'),
		new Audio('audio/sounds/want-to-die-1.mp3'),
		new Audio('audio/sounds/want-to-die-2.mp3'),
		new Audio('audio/sounds/roger.mp3'),
		new Audio('audio/sounds/hate.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
	],
	'08': [
		new Audio('audio/sounds/too-early.mp3'),
		new Audio('audio/sounds/why-first.mp3'),
		new Audio('audio/sounds/want-to-die-1.mp3'),
		new Audio('audio/sounds/want-to-die-2.mp3'),
		new Audio('audio/sounds/hate.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
	],
	'Можно спать': [
		new Audio('audio/sounds/cool.mp3'),
	],
	'Форточка': [
		new Audio('audio/sounds/naggets.mp3'),
		new Audio('audio/sounds/godno.mp3'),
		new Audio('audio/sounds/smthng-wrong.mp3'),
		new Audio('audio/sounds/roger.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
	],
	'На сегодня пары закончились!': [
		new Audio('audio/sounds/naggets.mp3'),
	],

	'У117': [
		new Audio('audio/sounds/crazy-koren.mp3'),
		new Audio('audio/sounds/koren-dontmark.mp3'),
		new Audio('audio/sounds/koren-change-surname.mp3'),
		new Audio('audio/sounds/koreniuuuk.mp3'),
		new Audio('audio/sounds/koren-dont-mark.mp3'),
		new Audio('audio/sounds/koren-dont-mark-2.mp3'),
		new Audio('audio/sounds/dont-mark.mp3'),
		new Audio('audio/sounds/allo.mp3'),
	],
	'У217': [
		new Audio('audio/sounds/dauni-217.mp3'),
	],

	'header': [
		new Audio('audio/sounds/kliga.mp3'),
		new Audio('audio/sounds/spravka.mp3'),
		new Audio('audio/sounds/belching-1.mp3'),
		new Audio('audio/sounds/dying-laught.mp3'),
		new Audio('audio/sounds/laught.mp3'),
		new Audio('audio/sounds/narkoman.mp3'),
		new Audio('audio/sounds/naggets.mp3'),
		new Audio('audio/sounds/fuck-you.mp3'),
		new Audio('audio/sounds/fuck-you-2.mp3'),
		new Audio('audio/sounds/fuck-you-3.mp3'),
		new Audio('audio/sounds/fuck-you-4.mp3'),
		new Audio('audio/sounds/ne-doljen.mp3'),
		new Audio('audio/sounds/content.mp3'),
		new Audio('audio/sounds/pomoika.mp3'),
		new Audio('audio/sounds/turbo-pushka.mp3'),
		new Audio('audio/sounds/yes-me.mp3'),
		new Audio('audio/sounds/blr-topchik.mp3'),
		new Audio('audio/sounds/fart.mp3'),
		new Audio('audio/sounds/blevon.mp3'),
	],

	'parity': [
		new Audio('audio/sounds/huinya.mp3'),
	],

	'auditory': [
		new Audio('audio/sounds/pomoika.mp3'),
		new Audio('audio/sounds/roger.mp3'),
	],
}

export function initSounds() {
	$('.lesson__teacher').on('click', function () {
		let key = $(this).text();
		key = key.split(' ')[0];
		playSound(key);
	});

	$('.day__title').on('click', function () {
		let key = $(this).text();
		playSound(key);
	});

	$('.lesson__time').on('click', function () {
		let key = $(this).children('.lesson__begin').text();
		key = key.split(':')[0];
		playSound(key);
	});

	$('.lesson__none').on('click', function () {
		playSound('Форточка');
	});

	$('.nav-h__tab').on('click', function () {
		let key = $(this).text();
		playSound(key);
	});

	$('.header__title').on('click', function () { playSound('header') });
	$('.header__parity').on('click', function () { playSound('parity') });
	$('.lesson__location').on('click', function () { playSound('auditory') });
}

function playSound(key) {
	let random = Math.floor(Math.random() * (sound[key].length));

	for (let keyStop in sound) {
		for (let i = 0; i < sound[keyStop].length; i++) {
			sound[keyStop][i].pause();
			sound[keyStop][i].currentTime = 0;
		}
	}
	sound[key][random].play();
}