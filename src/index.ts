export const magicObjectSearch = <T extends { [key: string | number]: any }>(
	str: string,
	options: T[],
	properties: (keyof T)[],
): T[] => {
	return options.filter(option => {
		return properties.some(prop => {
			const propValue = option[prop];
			if (propValue === undefined || propValue === null) return false;
			return propValue.toString().includes(str);
		});
	});
};
