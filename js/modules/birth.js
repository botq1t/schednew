import {
	getDate
} from "./date.js";

const dates = {
	'1.3': 'Matvey M.',
	'1.10': 'Tanya',
	'3.10': 'Arthur',
	'3.20': 'Ivetta',
	'5.18': 'Julia L.',
	'7.25': 'Dasha K.',
	'7.2': 'Julia S.',
	'8.18': 'Alexdandra F.',
	'9.13': 'Nastya K.',
	'9.25': 'Masha',
	// '10.24': 'Andrew G.',
	'11.2': 'Jager',
	'11.14': 'Andrew K.',
}

export function displayBirthDay() {
	let day = getDate().date.getDate();
	let month = getDate().date.getMonth() + 1;
	let checker = `${month}.${day}`;
	console.log(checker);

	let title = $('.header__title');
	if (dates[checker]) {
		title.html(`<span class="icon-cake"></span><p>Happy Birthday, ${dates[checker]}</p><span class="icon-cake">`);
	} else {
		title.html(`Расписанька`);
	}

	let toRepeat = 86401 - getDate().timeInSeconds;
	toRepeat *= 1000;
	setTimeout(displayBirthDay, toRepeat);
}