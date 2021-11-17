import {
	getDate,
	getWeekIndexParity
} from '../date.js';
import {
	getBigBreakIndex,
	getLessonIndex,
	lessons,
	lessonTime
} from './../schedule.js';

import {
	totalHours,
	corrections
} from './database.js';

/*const hoursOrder = {
	'АИП и ЧФ': 1,
	'АП и ПНК': 2,
	'МОМАН': 3,
	'ОПВД': 4,
	'ПАП при ОВД': 5,
	'ПП и ТОВД': 6,
	'ФРО на АЯ': 7,
	'ЭО': 8,
}*/

const hoursOrder = [
	'АИП и ЧФ',
	'АП и ПНК',
	'МОМАН',
	'ОПВД',
	'ПАП при ОВД',
	'ПП и ТОВД',
	'ФРО на АЯ',
	'ЭО',
]

export function initHours(group) {
	let hours = getHours(group);
	// console.log(hours);
	let hoursContainer = $(`#nav-v_hours-target`).find(`.nav-h_${group}-target`);
	// console.log(hoursContainer);
	hoursContainer.empty();

	/*for (let name in hours.passed) {
		hoursContainer.append(`
		<div class="hours__item">
			<h2 class="hours__title">${name}</h2>
			<main class="hours__body">
				<div class="hours__row hours__description">
					<div class="hours__column hours__none"></div>
					<div class="hours__column hours__passed">Прошло</div>
					<div class="hours__column hours__remain">Осталось</div>
					<div class="hours__column hours__total">Всего</div>
				</div>
				<div class="hours__row hours__lection">
					<div class="hours__column hours__type">ЛК</div>
					<div class="hours__column hours__passed">${hours.passed[name].lection}</div>
					<div class="hours__column hours__remain">${hours.remain[name].lection}</div>
					<div class="hours__column hours__total">${hours.total[name].lection}</div>
				</div>
				<div class="hours__row hours__practice">
					<div class="hours__column hours__type">ПЗ</div>
					<div class="hours__column hours__passed">${hours.passed[name].practice}</div>
					<div class="hours__column hours__remain">${hours.remain[name].practice}</div>
					<div class="hours__column hours__total">${hours.total[name].practice}</div>
				</div>
			</main>
		</div>
		`);

		hoursContainer.children().last().css(`order`, `${hoursOrder[name]}`);
	}*/

	for (let name of hoursOrder) {
		hoursContainer.append(`
		<div class="hours__item">
			<h2 class="hours__title">${name}</h2>
			<main class="hours__body">
				<div class="hours__row hours__description">
					<div class="hours__column hours__none"></div>
					<div class="hours__column hours__passed">Прошло</div>
					<div class="hours__column hours__remain">Осталось</div>
					<div class="hours__column hours__total">Всего</div>
				</div>
				<div class="hours__row hours__lection">
					<div class="hours__column hours__type">ЛК</div>
					<div class="hours__column hours__passed">${hours.passed[name].lection}</div>
					<div class="hours__column hours__remain">${hours.remain[name].lection}</div>
					<div class="hours__column hours__total">${hours.total[name].lection}</div>
				</div>
				<div class="hours__row hours__practice">
					<div class="hours__column hours__type">ПЗ</div>
					<div class="hours__column hours__passed">${hours.passed[name].practice}</div>
					<div class="hours__column hours__remain">${hours.remain[name].practice}</div>
					<div class="hours__column hours__total">${hours.total[name].practice}</div>
				</div>
			</main>
		</div>
		`);
	}
}

function getHours(group) {
	let passedHours = getPassedHours(group);
	let remainHours = {};
	for (let key in totalHours) {
		// console.log(key);
		if (!remainHours[key]) remainHours[key] = { 'lection': 0, 'practice': 0 };
		remainHours[key].lection = totalHours[key].lection - passedHours[key].lection;
		remainHours[key].practice = totalHours[key].practice - passedHours[key].practice;
	}

	let output = {};
	output.total = totalHours;
	output.passed = passedHours;
	output.remain = remainHours;

	return output;
}

function getPassedHours(group) {
	let weekIndex = getWeekIndexParity().weekIndex - 1;
	let weekParity = getWeekIndexParity().weekParity;

	let passedHours = getPassedWeeksHours(group, weekIndex);


	let thisWeekHours = getWeekHours(group, weekParity, getDate().dayIndex - 1);

	for (let key in thisWeekHours) {
		passedHours[key].lection += thisWeekHours[key].lection;
		passedHours[key].practice += thisWeekHours[key].practice;
	}

	let thisDayHours = getThisDayHours(group, weekParity);
	for (let key in thisDayHours) {
		passedHours[key].lection += thisDayHours[key].lection;
		passedHours[key].practice += thisDayHours[key].practice;
	}
	// console.log(corrections);

	for (let key in corrections[group]) {
		if (!passedHours[key]) passedHours[key] = {
			'lection': 0,
			'practice': 0
		}
		passedHours[key].lection += corrections[group][key].lection;
		passedHours[key].practice += corrections[group][key].practice;
	}

	return passedHours;
}

function getPassedWeeksHours(group, weekIndex) {
	let parityAmount = {
		'odd': Math.ceil(weekIndex / 2),
		'even': Math.floor(weekIndex / 2),
	}

	let passedHours = {};

	let oddHours = getWeekHours(group, 'odd');
	let evenHours = getWeekHours(group, 'even');

	for (let key in oddHours) {
		oddHours[key].lection *= parityAmount.odd;
		oddHours[key].practice *= parityAmount.odd;

		if (!passedHours[key]) passedHours[key] = { 'lection': 1, 'practice': 1 };

		passedHours[key].lection *= oddHours[key].lection;
		passedHours[key].practice *= oddHours[key].practice;
	}

	for (let key in evenHours) {
		evenHours[key].lection *= parityAmount.even;
		evenHours[key].practice *= parityAmount.even;

		passedHours[key].lection += evenHours[key].lection;
		passedHours[key].practice += evenHours[key].practice;
	}

	return passedHours;
}

function getWeekHours(group, parity, endDay = 6) {
	let outputHours = {};

	let schedule = lessons[group];
	for (let i = 0; i <= endDay; i++) {
		let thisDaySchedule = schedule[i];
		if (!thisDaySchedule.lessons) continue;
		// console.log(i);

		for (let lesson in thisDaySchedule) {
			lesson = thisDaySchedule[lesson];
			if (lesson == 'lessons') continue;
			if (lesson.parity != 'both' && lesson.parity != parity) continue;
			if (lesson.name === null) continue;
			let name = lesson.name;
			let type = '';
			switch (lesson.type) {
				case 'ЛК':
					type = 'lection';
					break;
				case 'ПЗ':
					type = 'practice';
					break;
			}

			if (!outputHours[name]) outputHours[name] = { 'lection': 0, 'practice': 0 };
			outputHours[name][type]++;
			// console.log(lesson);
		}
	}

	return outputHours;
}

function getThisDayHours(group, parity) {
	let dayIndex = getDate().dayIndex;
	// let dayIndex = 3;
	let hours = {};

	let schedule = lessons[group][dayIndex];
	if (!schedule.lessons) return {};

	let lessonIndex = getLessonIndex();
	switch (lessonIndex) {
		case 'before':
			return {};
		case 'after':
			for (let lesson in schedule) {
				lesson = schedule[lesson];
				if (lesson == 'lessons') continue;
				if (lesson.parity != 'both' && lesson.parity != parity) continue;
				if (lesson.name === null) continue;
				let name = lesson.name;
				let type = '';
				switch (lesson.type) {
					case 'ЛК':
						type = 'lection';
						break;
					case 'ПЗ':
						type = 'practice';
						break;
				}

				if (!hours[name]) hours[name] = { 'lection': 0, 'practice': 0 };
				hours[name][type]++;
			}
			return hours;
	}
	// return 'wait';

	if (typeof lessonIndex == 'string') {
		lessonIndex = getBigBreakIndex();
	}

	for (let i = 1; i <= lessonIndex; i++) {
		for (let lesson in schedule) {
			lesson = schedule[lesson];
			if (lesson == 'lessons') continue;
			if (lesson.parity != 'both' && lesson.parity != parity) continue;
			if (lesson.index != i) continue;
			if (lesson.name === null) continue;
			let name = lesson.name;
			let type = '';
			switch (lesson.type) {
				case 'ЛК':
					type = 'lection';
					break;
				case 'ПЗ':
					type = 'practice';
					break;
			}

			if (!hours[name]) hours[name] = { 'lection': 0, 'practice': 0 };
			hours[name][type]++;
		}
	}
	return hours;
}