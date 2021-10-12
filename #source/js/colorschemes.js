"use strict"

let defaultSettings = {
	colorScheme: 'light',
	group: 117,
	isSounds: false,
	isAds: false,
}

if (!localStorage['schednew_settings']) localStorage['schednew_settings'] = JSON.stringify(defaultSettings);



let settings = JSON.parse(localStorage['schednew_settings']);
if (!settings.group) {
	localStorage.removeItem('schednew_settings');
	document.location.reload();
}
console.log(settings);

$('head').append(`<link rel="stylesheet" href="css/colorschemes/${settings.colorScheme}.css">`);