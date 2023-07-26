interface ColorVariants {
	primary: string;
	secondary: string;
	disabled: string;
	whatsapp: string;
	email: string;
	github: string;
	instagram: string;
	facebook: string;
	linkedIn: string;
	medium: string;
	telegram: string;
}

interface ColorVariant {
	key: keyof ColorVariants;
}

export type { ColorVariant, ColorVariants };
