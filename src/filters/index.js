export const truncate = (val, len) => {
	return val.substr(0, len);
};

export const capitalize = val => {
	return val.toUpperCase();
};

export const pascalizeWord = val => {
	return val.charAt(0).toUpperCase() + val.slice(1);
};