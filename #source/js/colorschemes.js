"use strict"

let settings = {
	colorScheme: 'light',
}

localStorage['schednew_settings'] = JSON.stringify(settings);

if (!localStorage['schednew_settings']) {
	$('head').append('<link rel="stylesheet" href="css/colorschemes/light.css">');
} else {
	let colorScheme = JSON.parse(localStorage['schednew_settings']).colorScheme;
	$('head').append(`<link rel="stylesheet" href="css/colorschemes/${colorScheme}.css">`);
}

