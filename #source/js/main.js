"use strict"

$('.nav-v__tab').click(function () {
	$('.nav-v__tab').each(function () {
		$(this).removeClass('active');
	});
	$(this).addClass('active');
});

$('.nav-h__tab').click(function () {
	$('.nav-h__tab').each(function () {
		$(this).removeClass('active');
	});
	$(this).addClass('active');
});

$('.info__toggler').click(function () {
	$('.info__toggler').toggleClass('active');
	$('.info').toggleClass('active');
});