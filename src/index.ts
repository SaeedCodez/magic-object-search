export const magicObjectSearch = <T extends { [key: string | number]: any }>(
	searchValue: string | number | boolean | null | undefined,
	options: T[],
	properties: (keyof T)[],
): T[] => {
	const searchValueStr = String(searchValue);
	return options.filter(option => {
		return properties.some(prop => {
			const propValue = option[prop];
			if (
				typeof propValue === "string" ||
				typeof propValue === "number"
			) {
				return String(propValue).includes(searchValueStr);
			} else return propValue === searchValue;
		});
	});
};
