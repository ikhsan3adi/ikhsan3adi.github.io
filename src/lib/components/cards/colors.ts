interface TagColors {
	default: string;
	flutter: string;
	dart: string;
	php: string;
	codeigniter: string;
	javascript: string;
	svelte: string;
}

interface TagColorKey {
	key: keyof TagColors;
	name: string;
}

interface CardColors {
	default: string;
	blue: string;
	yellow: string;
	red: string;
	purple: string;
	green: string;
}

interface CardColorKey {
	key: keyof CardColors;
}

export type { TagColors, TagColorKey, CardColors, CardColorKey };

export const randomizeElements = (array: CardColorKey[], count: number) => {
	if (count > array.length) {
		throw new Error('Array size cannot be smaller than expected random numbers count.');
	}
	const result: CardColorKey[] = [];
	const guardian = new Set();

	while (result.length < count) {
		const index = Math.floor(count * Math.random());
		if (guardian.has(index)) {
			continue;
		}
		const element = array[index];
		guardian.add(index);
		result.push(element);
	}
	return result;
};
