interface ButtonColorVariants {
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

interface ButtonColorVariant {
	key: keyof ButtonColorVariants;
}

export type { ButtonColorVariant, ButtonColorVariants };
