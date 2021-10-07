"use strict"

$('.nav-v__tab').click(function () {
	$('.nav-v__tab').each(function () {
		$(this).removeClass('active');
	});
	$(this).addClass('active');
});