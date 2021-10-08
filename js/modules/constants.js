const constants = {
	dayName: {
		full: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		],

		short: [
			'ВС',
			'ПН',
			'ВТ',
			'СР',
			'ЧТ',
			'ПТ',
			'СБ'
		]
	},

	remainEnd: 1640552400000,				//? Конец семестра в миллисекундах
	weekCheck: 604800000, 					//? Одна неделя в миллисекундах
	semBegin: 1630270800000, 				//? Начало семестра в миллисекундах
}

export const dayName = constants.dayName;
export const remainEnd = constants.remainEnd;
export const weekCheck = constants.weekCheck;
export const semBegin = constants.semBegin;