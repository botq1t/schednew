"use strict"

import {
	setMainMaxHeight
} from './modules/init.js';
import {
	initSchedule
} from './modules/schedule.js';
import {
	initSettings,
	readSettings,
} from './modules/settings/settings.js';

initSettings(settings);

$(window).resize(setMainMaxHeight);
initSchedule(117);
initSchedule(217);

// ! ================= Time ==========================
import {
	setInfoTime,
	setInfoRemain,
	setInfoWeekDay,
	initParity,
	initCurrentDay,
} from './modules/date.js';

import {
	highLightCurrentLesson,
	setLessonCountdown,
} from './modules/schedule.js';

setInfoTime();
setInfoRemain();
setInfoWeekDay();
initParity();
initCurrentDay();
highLightCurrentLesson();
setLessonCountdown();

$('.nav-v__tab').click(function () {
	if ($(this).hasClass('active')) return;
	let id = $(this).attr('id');
	// console.log(id);

	$('.nav-v__tab').removeClass('active');
	$(this).addClass('active');

	// $('.main__content').children().css('display', 'none');
	$('.main__content').children().fadeOut(150);
	// $(`#${id}-target`).css('display', 'flex');
	$(`#${id}-target`).delay(155).fadeIn(300, function () {
		$(this).css('display', 'flex');
	});
});

$('.nav-h__tab').click(function () {
	if ($(this).hasClass('active')) return;
	let id = $(this).attr('id');
	// console.log(id);

	$('.nav-h__tab').removeClass('active');
	$(this).addClass('active');


	$('.main__schedule').children().fadeOut(150);
	$('.main__hours').children().fadeOut(150);
	$(`.${id}-target`).delay(155).fadeIn(300, function () {
		$(this).css('display', 'flex');
	});
});

$('.info__toggler').click(function () {
	$('.info__toggler').toggleClass('active');
	$('.info').toggleClass('active');
});

import { changeParity } from './modules/date.js';

$('.header__parity').click(function () {
	let weekParity = $(this).attr('class');
	weekParity = weekParity.split(' ')[1].split('__')[1].split('_')[1];
	changeParity(weekParity);
});

$('.settings__accept').on('click', readSettings);

$('.day__title').click(function () {
	/*let group = $(this).parent().parent().attr('id');
	group = group.split('_')[1];
	console.log(group);
	$('.day__body').css('display', 'none');
	$(this).next().css('display', 'flex');*/

	let cond = $(this).next().css('display');

	switch (cond) {
		case 'none':
			$(this).next().slideDown(300, function () {
				$(this).css('display', 'flex');
			});
			break;
		case 'flex':
			$(this).next().slideUp(300);
			break;
	}

	setMainMaxHeight();
});

document.getElementById(`nav-h_${settings.group}`).click();
document.getElementById('nav-v_schedule').click();

setMainMaxHeight();

import { initHours } from './modules/hours/hoursCreation.js';

initHours(117);
initHours(217);