interface TagColors {
	default: string;
	flutter: string;
	dart: string;
	html: string;
	php: string;
	codeigniter: string;
	javascript: string;
	typescript: string;
	svelte: string;
}

interface TagColorKey {
	key: keyof TagColors;
	name: string;
}

interface CardColor {
	light: string;
	dark: { border: string; bg: string };
}

interface CardColorsVariant {
	default: CardColor;
	blue: CardColor;
	yellow: CardColor;
	red: CardColor;
	purple: CardColor;
	green: CardColor;
}

interface CardColorKey {
	key: keyof CardColorsVariant;
}

export type { TagColors, TagColorKey, CardColorsVariant as CardColors, CardColorKey };

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
