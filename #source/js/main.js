"use strict"

import { setMainMaxHeight } from './modules/init.js';
import { initSchedule } from './modules/schedule.js';

setMainMaxHeight();
$(window).resize(setMainMaxHeight);
initSchedule(117);
initSchedule(217);

// ! ================= Time ==========================
import { setInfoTime } from './modules/date.js';
import { setInfoRemain } from './modules/date.js';
import { setInfoWeekDay } from './modules/date.js';
import { initParity } from './modules/date.js';
import { initCurrentDay } from './modules/date.js';
import { highLightCurrentLesson } from './modules/schedule.js';
import { setLessonCountdown } from './modules/schedule.js';

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
	console.log(id);

	$('.nav-v__tab').removeClass('active');
	$(this).addClass('active');

	$('.main__content').children().css('display', 'none');
	// $(`#${id}-target`).css('display', 'flex');
	$(`#${id}-target`).fadeIn(300, function () {
		$(this).css('display', 'flex');
	});
});

$('.nav-h__tab').click(function () {
	if ($(this).hasClass('active')) return;
	let id = $(this).attr('id');
	// console.log(id);

	$('.nav-h__tab').removeClass('active');
	$(this).addClass('active');

	// $('.main__schedule').children().not('.header__parity').css('display', 'none');
	$('.main__schedule').children().css('display', 'none');
	$('.main__hours').children().css('display', 'none');
	// $(`#${id}-target`).css('display', 'flex');
	$(`.${id}-target`).fadeIn(300, function () {
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

document.getElementById('nav-h_117').click();
document.getElementById('nav-v_schedule').click();

