import { MONTHS } from 'utils';

export const getSelectMenuOptionsArray = (options = []) => {
	return options.map((option) => {
		return {
			label: option,
			value: option.toLowerCase()
		};
	});
};

export const getSelectMenuOptionsObject = (options = {}) => {
	return Object.keys(options).map((key) => {
		return {
			label: key,
			value: options[key]
		};
	});
};

export const formatDate = (dateObj) => {
	const date = new Date(dateObj);
	const formattedDate = `${
		MONTHS[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`;

	let time;
	const hour = date.getHours();
	if (hour === 0) {
		time = `12:${date.getMinutes()} am`;
	} else if (hour < 12) {
		time = `${hour}:${date.getMinutes()} am`;
	} else if (hour === 12) {
		time = `12:${date.getMinutes()} pm`;
	} else {
		time = `${hour - 12}:${date.getMinutes()} pm`;
	}

	return {
		date: formattedDate,
		time: time
	};
};
