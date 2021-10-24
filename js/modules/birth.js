import {
	getDate
} from "./date.js";

const dates = {
	'1.3': 'Matvey',
	'1.10': 'Tanya',
	'2.23': 'Nastya',
  '3.10': 'Arthur',
	'3.12': 'Alexdandra',
	'3.20': 'Ivetta',
	'3.22': 'Ivgenia',
	'5.18': 'Julia',
	'7.2': 'Julia',
  '7.25': 'Dasha',
  '8.7': 'Victor',
	'8.18': 'Alexdandra',
	'9.13': 'Nastya',
	'9.25': 'Masha',
	'10.19': 'Dasha',
	// '10.24': 'Andrew',
	'11.2': 'Jager',
	'11.14': 'Andrew',
	'12.12': 'Sanya',
	'12.14': 'Matvey',
	'12.30': 'Kate',
}

export function displayBirthDay() {
	let day = getDate().date.getDate();
	let month = getDate().date.getMonth() + 1;
	let checker = `${month}.${day}`;
	//console.log(checker);

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