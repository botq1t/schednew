import { remainEnd, weekCheck, semBegin, dayName } from './constants.js';
import { setMainMaxHeight } from './init.js';

export function getDate() {
	let output = {}

	output.date = new Date();
	// output.date = new Date(1634041876000);
	output.dayIndex = output.date.getDay();
	output.timeInSeconds = (output.date.getHours() * 3600) + (output.date.getMinutes() * 60) + (output.date.getSeconds());
	return output;
}

export function setInfoTime() {
	let timeString = getTimeStringFromSeconds(getDate().timeInSeconds);

	$('.info__time').text(timeString);

	setTimeout(setInfoTime, 1000);
}

export function setInfoRemain() {
	let timestamp = getDate().date.getTime();
	// console.log(timestamp);

	let remainTimestamp = remainEnd - timestamp;
	remainTimestamp = Math.floor(remainTimestamp / 1000);

	let remainDays = Math.floor(remainTimestamp / 86400);
	let remainTime = remainTimestamp % 86400;
	let remainTimeString = getTimeStringFromSeconds(remainTime);

	$('.info__countdown').html(`До конца семестра: ${remainDays} д., ${remainTimeString}`);

	setTimeout(setInfoRemain, 1000);
}

export function setInfoWeekDay() {
	let weekIndex = getWeekIndexParity().weekIndex;
	let day = dayName.short[getDate().dayIndex];

	$('.info__week').html(`Неделя №${weekIndex} (${day})`);

	let toRepeat = 86403 - getDate().timeInSeconds;
	setTimeout(setInfoWeekDay, toRepeat);
}

export function getWeekIndexParity() {
	let weekPassTime = getDate().date.getTime() - semBegin;
	let weekIndex = Math.floor(weekPassTime / weekCheck) + 1;

	let weekParity = getWeekparity(weekIndex);

	return { weekIndex, weekParity };
}

export function initParity(weekParity = getWeekIndexParity().weekParity) {
	// let weekParity = getWeekIndexParity().weekParity;

	switch (weekParity) {
		case 'even':
			$('.header__parity').text('Чётная неделя');
			$('.lesson_even').css('display', 'grid');
			$('.lesson_odd').css('display', 'none');
			break;
		case 'odd':
			$('.header__parity').text('Нечётная неделя');
			$('.lesson_odd').css('display', 'grid');
			$('.lesson_even').css('display', 'none');
			break;
	}

	$('.header__parity').removeClass('header__parity_odd');
	$('.header__parity').removeClass('header__parity_even');
	$('.header__parity').addClass(`header__parity_${weekParity}`);


	setMainMaxHeight();
	let toRepeat = 86403 - getDate().timeInSeconds;
	setTimeout(setInfoWeekDay, toRepeat);
}

export function changeParity(weekParity) {
	switch (weekParity) {
		case 'odd':
			weekParity = 'even';
			break;
		case 'even':
			weekParity = 'odd';
			break;
	};

	switch (weekParity) {
		case 'even':
			$('.header__parity').text('Чётная неделя');
			$('.lesson_even').css('display', 'grid');
			$('.lesson_odd').css('display', 'none');
			break;
		case 'odd':
			$('.header__parity').text('Нечётная неделя');
			$('.lesson_odd').css('display', 'grid');
			$('.lesson_even').css('display', 'none');
			break;
	}

	$('.header__parity').removeClass('header__parity_odd');
	$('.header__parity').removeClass('header__parity_even');
	$('.header__parity').addClass(`header__parity_${weekParity}`);
}

function getWeekparity(weekIndex) {
	if (weekIndex % 2 == 0) {
		return 'even';
	} else {
		return 'odd';
	}
}


function getTimeStringFromSeconds(time) {
	let timeString = '';

	if (getHMSFromSeconds(time).hours < 10) timeString += '0';
	timeString += getHMSFromSeconds(time).hours + ':';

	if (getHMSFromSeconds(time).minutes < 10) timeString += '0';
	timeString += getHMSFromSeconds(time).minutes + ':';

	if (getHMSFromSeconds(time).seconds < 10) timeString += '0';
	timeString += getHMSFromSeconds(time).seconds;

	return timeString;
}

function getHMSFromSeconds(time) {
	let output = {};

	output.hours = Math.floor(time / 3600);
	output.minutes = Math.floor((time % 3600) / 60);
	output.seconds = time % 60;
	return output;
}