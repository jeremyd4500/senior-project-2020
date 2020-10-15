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
