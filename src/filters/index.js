export const truncate = (val, len) => {
	return val.substr(0, len);
};

export const capitalize = val => {
	return val.toUpperCase();
};

export const pascalize = val => {
	const whitespace = /\s/;
	const hyphen = /[-]/;

	return val
		.split(whitespace).map(v => {
			return capitalizeFirstLetter(v);
		}).join(" ")
		.split(hyphen).map(v => {
			return capitalizeFirstLetter(v);
		}).join("-");
};

const capitalizeFirstLetter = val => {
	return val.charAt(0).toUpperCase() + val.slice(1);
}