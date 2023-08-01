interface TagColor {
	bg: string;
	border: string;
	text: string;
}

interface TagColors {
	default: TagColor;
	flutter: TagColor;
	dart: TagColor;
	html: TagColor;
	php: TagColor;
	codeigniter: TagColor;
	javascript: TagColor;
	typescript: TagColor;
	svelte: TagColor;
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
