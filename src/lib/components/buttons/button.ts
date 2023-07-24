interface ColorVariants {
	primary: string;
	secondary: string;
}

interface ColorVariant {
	key: keyof ColorVariants;
}

export type { ColorVariant, ColorVariants };
