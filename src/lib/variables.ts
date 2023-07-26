import type { ColorVariant } from '$lib/components/buttons/button';

import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import Facebook from '$lib/components/graphics/social/Facebook.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';
import Telegram from '$lib/components/graphics/social/Telegram.svelte';
import Medium from '$lib/components/graphics/social/Medium.svelte';

const navLinks = [
	{ text: 'Home', link: 'home' },
	{ text: 'About', link: 'about' },
	{ text: 'Portfolio', link: 'portfolio' },
	{ text: 'Tools', link: 'tools' },
	{ text: 'Social', link: 'social' },
	{ text: 'Contact', link: 'contact' }
];

const projects = [
	{
		name: 'Auction app',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
		imageUrl: '',
		tag: ['flutter', 'svelte']
	},
	{
		name: 'Polling app',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
		imageUrl: '',
		tag: ['flutter', 'svelte']
	},
	{
		name: 'Music app',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
		imageUrl: '',
		tag: ['flutter', 'svelte']
	},
	{
		name: 'Todo app',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, sed!',
		imageUrl: '',
		tag: ['flutter', 'svelte']
	}
];

const githubLink = 'https://github.com/ikhsan3adi/';
const linkedInLink = 'https://www.linkedin.com/in/ikhsan-satriadi/';
const whatsappLink = 'https://wa.me';
const emailLink = 'mailto:ikhsansatriadi175@gmail.com';

const socials = [
	{
		social: 'Github',
		name: '@ikhsan3adi',
		link: githubLink,
		colorVariant: { key: 'github' } as ColorVariant,
		icon: Github
	},
	{
		social: 'Instagram',
		name: '@ikhsan3adi',
		link: 'https://instagram.com/ikhsan3adi',
		colorVariant: { key: 'instagram' } as ColorVariant,
		icon: Instagram
	},
	{
		social: 'Facebook',
		name: 'Ikhsan Satriadi',
		link: 'https://facebook.com/onetrd',
		colorVariant: { key: 'facebook' } as ColorVariant,
		icon: Facebook
	},
	{
		social: 'LinkedIn',
		name: 'Ikhsan Satriadi',
		link: linkedInLink,
		colorVariant: { key: 'linkedIn' } as ColorVariant,
		icon: LinkedIn
	},
	{
		social: 'Telegram',
		name: 'Ikhsan',
		link: 'https://t.me/xann_xenn_xinn',
		colorVariant: { key: 'telegram' } as ColorVariant,
		icon: Telegram
	},
	{
		social: 'Medium',
		name: 'Ikhsan Satriadi',
		link: 'https://medium.com/@ikhsansatriadi175',
		colorVariant: { key: 'medium' } as ColorVariant,
		icon: Medium
	}
];

export { navLinks, projects, socials, linkedInLink, whatsappLink, emailLink };
