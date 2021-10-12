

export function initSettings(settings) {
	$('.settings__value').each(function () {
		let name = $(this).attr('name');
		let value = String(settings[name]);
		console.log(value);

		$(this).children('option').each(function () {
			// console.log($(this).parent().attr('name'));
			// console.log($(this).val());
			if ($(this).val() == value) {
				$(this).attr('selected', 'selected');
				return;
			}
		});
	})
}

export function readSettings() {
	let settings = JSON.parse(localStorage['schednew_settings']);

	$('.settings__value').each(function () {
		let name = $(this).attr('name');
		let value = $(this).val();
		settings[name] = getSettingMeaning(value);
	})
	localStorage['schednew_settings'] = JSON.stringify(settings);
	document.location.reload();
}

function getSettingMeaning(value) {
	if (value == 'true') return true;
	if (value == 'false') return false;
	if (!isNaN(Number(value))) return Number(value);
	return String(value);
}