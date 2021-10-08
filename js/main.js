"use strict"

import { setMainMaxHeight } from './modules/init.js';
import { initSchedule } from './modules/schedule.js';


setMainMaxHeight();

initSchedule(117);
initSchedule(217);

$('.nav-v__tab').click(function () {
	let id = $(this).attr('id');

	$('.nav-v__tab').removeClass('active');
	$(this).addClass('active');

	$('.main__content').children().css('display', 'none');
	$(`#${id}-target`).css('display', 'flex');
});

$('.nav-h__tab').click(function () {
	let id = $(this).attr('id');
	console.log(id);

	$('.nav-h__tab').removeClass('active');
	$(this).addClass('active');

	$('.main__schedule').children().not('.schedule__parity').css('display', 'none');
	$(`#${id}-target`).css('display', 'flex');
});

$('.info__toggler').click(function () {
	$('.info__toggler').toggleClass('active');
	$('.info').toggleClass('active');
});

// $('.day__title').click(function () {
// 	$('.day__body').css('display', 'none');
// 	$(this).next().css('display', 'flex');
// });

document.getElementById('nav-h_117').click();
document.getElementById('nav-v_schedule').click();