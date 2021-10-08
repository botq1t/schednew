import { dayName } from './constants.js';

export const lessons = {
	117: {
		// ? Воскресенье
		0: {
			'lessons': false,
		},

		// ? Понедельник
		1: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 2,
				'parity': 'both',
				'name': 'ПАП при ОВД',
				'type': 'ПЗ',
				'location': '3204',
				'teacher': 'Александров О.В.'
			},
			3: {
				'index': 3,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Дубовский А.В.'
			},
			4: {
				'index': 4,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305',
				'teacher': 'Лазовский Г.Б.'
			},

		},

		// ? Вторник
		2: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'odd',
				'name': 'ЭО',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Науменко А.И.'
			},
			2: {
				'index': 1,
				'parity': 'even',
				'name': 'ЭО',
				'type': 'ЛК',
				'location': '3103',
				'teacher': 'Науменко А.И.'
			},

			3: {
				'index': 2,
				'parity': 'both',
				'name': 'ЭО',
				'type': 'ПЗ',
				'location': '3209',
				'teacher': 'Науменко А.И.'
			},
		},

		// ? Среда
		3: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': 'ОПВД',
				'type': 'ПЗ',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},

			2: {
				'index': 2,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305',
				'teacher': 'Лазовский Г.Б.'
			},

			3: {
				'index': 3,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ПЗ',
				'location': '3204',
				'teacher': 'Дубовский А.В.'
			},
		},

		// ? Четверг
		4: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'odd',
				'name': 'МОМАН',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Барабан И.И.'
			},

			2: {
				'index': 1,
				'parity': 'even',
				'name': 'АП и ПНК',
				'type': 'ЛК',
				'location': '3103',
				'teacher': 'Пилипчук В.С.'
			},
			3: {
				'index': 2,
				'parity': 'odd',
				'name': 'ОПВД',
				'type': 'ЛК',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},
			4: {
				'index': 2,
				'parity': 'even',
				'name': 'ОПВД',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Вишневский Р.А.'
			},
			5: {
				'index': 3,
				'parity': 'both',
				'name': 'ПАП при ОВД',
				'type': 'ЛК',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},

		},

		// ? Пятница
		5: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 2,
				'parity': 'odd',
				'name': 'АП и ПНК',
				'type': 'ПЗ',
				'location': '3103',
				'teacher': 'Пилипчук В.С.'
			},
			3: {
				'index': 2,
				'parity': 'even',
				'name': 'МОМАН',
				'type': 'ПЗ',
				'location': '3203',
				'teacher': 'Барабан И.И.'
			},
			4: {
				'index': 3,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ПЗ',
				'location': '3203',
				'teacher': 'Дубовский А.В.'
			},
			5: {
				'index': 4,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305',
				'teacher': 'Лазовский Г.Б.'
			},

		},

		// ? Суббота
		6: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 2,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			3: {
				'index': 3,
				'parity': 'both',
				'name': 'АИП и ЧФ',
				'type': 'ЛК',
				'location': '3209',
				'teacher': 'Худолей Е.В.'
			},
			4: {
				'index': 4,
				'parity': 'both',
				'name': 'АИП и ЧФ',
				'type': 'ПЗ',
				'location': '3209',
				'teacher': 'Худолей Е.В.'
			},

		},
	},

	217: {
		// ? Воскресенье
		0: {
			'lessons': false,
		},
		// ? Понедельник
		1: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 2,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305, 1307',
				'teacher': 'Лазовский Г.Б., Швайко Е. П.'
			},
			3: {
				'index': 3,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Дубовский А.В.'
			},
		},

		// ? Вторник
		2: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'odd',
				'name': 'ЭО',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Науменко А.И.'
			},
			2: {
				'index': 1,
				'parity': 'even',
				'name': 'ЭО',
				'type': 'ЛК',
				'location': '3103',
				'teacher': 'Науменко А.И.'
			},

			3: {
				'index': 2,
				'parity': 'both',
				'name': 'ОПВД',
				'type': 'ПЗ',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},
			4: {
				'index': 3,
				'parity': 'both',
				'name': 'ЭО',
				'type': 'ПЗ',
				'location': '3209',
				'teacher': 'Науменко А.И.'
			},

		},

		// ? Среда
		3: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 2,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ПЗ',
				'location': '3204',
				'teacher': 'Дубовский А.В.'
			},

			3: {
				'index': 3,
				'parity': 'both',
				'name': 'ПАП при ОВД',
				'type': 'ПЗ',
				'location': '3203',
				'teacher': 'Александров О.В.'
			},
			4: {
				'index': 4,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305, 1307',
				'teacher': 'Лазовский Г.Б., Швайко Е. П.'
			},
		},

		// ? Четверг
		4: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'odd',
				'name': 'МОМАН',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Барабан И.И.'
			},

			2: {
				'index': 1,
				'parity': 'even',
				'name': 'АП и ПНК',
				'type': 'ЛК',
				'location': '3103',
				'teacher': 'Пилипчук В.С.'
			},
			3: {
				'index': 2,
				'parity': 'odd',
				'name': 'ОПВД',
				'type': 'ЛК',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},
			4: {
				'index': 2,
				'parity': 'even',
				'name': 'ОПВД',
				'type': 'ЛК',
				'location': '3203',
				'teacher': 'Вишневский Р.А.'
			},
			5: {
				'index': 3,
				'parity': 'both',
				'name': 'ПАП при ОВД',
				'type': 'ЛК',
				'location': '3204',
				'teacher': 'Вишневский Р.А.'
			},

		},

		// ? Пятница
		5: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'odd',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},

			2: {
				'index': 1,
				'parity': 'even',
				'name': 'МОМАН',
				'type': 'ПЗ',
				'location': '3203',
				'teacher': 'Барабан И.И.'
			},
			3: {
				'index': 2,
				'parity': 'both',
				'name': 'ФРО на АЯ',
				'type': 'ПЗ',
				'location': '1305, 1307',
				'teacher': 'Лазовский Г.Б., Швайко Е. П.'
			},
			4: {
				'index': 3,
				'parity': 'odd',
				'name': 'АП и ПНК',
				'type': 'ПЗ',
				'location': '3103',
				'teacher': 'Пилипчук В.С.'
			},
			5: {
				'index': 3,
				'parity': 'even',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},
			6: {
				'index': 4,
				'parity': 'both',
				'name': 'ПП и ТОВД',
				'type': 'ПЗ',
				'location': '3203',
				'teacher': 'Дубовский А.В.'
			},

		},

		// ? Суббота
		6: {
			'lessons': true,
			1: {
				'index': 1,
				'parity': 'both',
				'name': null,
				'type': null,
				'location': null,
				'teacher': null
			},
			2: {
				'index': 2,
				'parity': 'both',
				'name': 'АИП и ЧФ',
				'type': 'ПЗ',
				'location': '3209',
				'teacher': 'Худолей Е.В.'
			},
			3: {
				'index': 3,
				'parity': 'both',
				'name': 'АИП и ЧФ',
				'type': 'ЛК',
				'location': '3209',
				'teacher': 'Худолей Е.В.'
			},

		},
	},
}

export const lessonTime = {
	string: {
		0: { 'begin': '00:00', 'end': '00:00' },
		1: { 'begin': '08:00', 'end': '09:35' },
		2: { 'begin': '09:50', 'end': '11:25' },
		3: { 'begin': '11:40', 'end': '13:15' },
		4: { 'begin': '14:00', 'end': '15:35' }
	},
	inSeconds: {
		0: { 'begin': 0, 'end': 0 },
		1: { 'begin': 28800, 'end': 34500 },
		2: { 'begin': 35400, 'end': 41100 },
		3: { 'begin': 42000, 'end': 47700 },
		4: { 'begin': 50400, 'end': 56100 }
	}
}

export const breakTime = {
	big: {
		string: {
			1: { 'begin': '09:35', 'end': '09:50' },
			2: { 'begin': '11:25', 'end': '11:40' },
			3: { 'begin': '13:15', 'end': '14:00' },
		},

		inSeconds: {
			1: { 'begin': 34500, 'end': 35400 },
			2: { 'begin': 41100, 'end': 42000 },
			3: { 'begin': 47700, 'end': 50400 },
		}
	},

	little: {
		string: {
			1: { 'begin': '08:45', 'end': '08:50' },
			2: { 'begin': '10:35', 'end': '10:40' },
			3: { 'begin': '11:25', 'end': '11:30' },
			4: { 'begin': '14:45', 'end': '14:50' },
		},

		inSeconds: {
			1: { 'begin': '08:45', 'end': '08:50' },
			2: { 'begin': '10:35', 'end': '10:40' },
			3: { 'begin': '11:25', 'end': '11:30' },
			4: { 'begin': '14:45', 'end': '14:50' },
		}
	} // ! НАДО ПОСЧИТАТЬ
}



export function initSchedule(group) {
	let groupSchedule = $(`#nav-h_${group}-target`);
	for (let i = 1; i <= 6; i++) {
		createDaySchedule(group, i, groupSchedule);
	}

	createDaySchedule(group, 0, groupSchedule);
}

function createDaySchedule(group, day, groupSchedule) {
	groupSchedule.append(`<div class="schedule__day day day_${day}"></div>`);

	let daySchedule = groupSchedule.children(`.day_${day}`);
	daySchedule.append(`<h2 class="day__title">${dayName.full[day]}</h2>`);

	if (!lessons[group][day].lessons) return;

	daySchedule.append(`<main class="day__body"></main>`);
	daySchedule = daySchedule.children('.day__body');

	for (let j in lessons[group][day]) {
		if (j == 'lessons') continue;

		addLesson(lessons[group][day][j], daySchedule);
	}
}

function addLesson(lesson, daySchedule) {
	daySchedule.append(`<section class="day__lesson lesson lesson_${lesson.index} lesson_${lesson.parity}"></section>`);

	let lessonOutput = daySchedule.children().last();

	lessonOutput.append(`
	<div class="lesson__item lesson__time">
		<div class="lesson__time-item lesson__begin">${lessonTime.string[lesson.index].begin}</div>
		<div class="lesson__time-item lesson__end">${lessonTime.string[lesson.index].end}</div>
	</div>
	`);

	if (lesson.name === null) {
		lessonOutput.append(`<div class="lesson__item lesson__none">Ничего</div>`);
		lessonOutput.addClass('lesson_none');
		return;
	}

	lessonOutput.append(`<div class="lesson__item lesson__name">${lesson.name}</div>`);
	lessonOutput.append(`<div class="lesson__item lesson__type">${lesson.type}</div>`);
	lessonOutput.append(`<div class="lesson__item lesson__location">${lesson.location}</div>`);
	lessonOutput.append(`<div class="lesson__item lesson__teacher">${lesson.teacher}</div>`);

	switch (lesson.type) {
		case 'ЛК':
			lessonOutput.addClass('lesson_lection');
			break;
		case 'ПЗ':
			lessonOutput.addClass('lesson_practice');
			break;
	}
}



export function getLessonAmount(group, day, parity) {
	let lessonAmount = 0;
	for (let j in lessons[group][day]) {
		if (j == 'lessons') {
			continue;
		} else if (lessons[group][day][j].index > lessonAmount
			&&
			(parity == lessons[group][day][j].parity || lessons[group][day][j].parity == 'both')) {
			lessonAmount = lessons[group][day][j].index;
		}
	}
	return lessonAmount;
}