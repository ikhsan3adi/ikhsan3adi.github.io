import type { ColorVariant } from '$lib/components/buttons/button';
import type { Project } from '$lib/api/projects';

import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import Facebook from '$lib/components/graphics/social/Facebook.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';
import Telegram from '$lib/components/graphics/social/Telegram.svelte';
import Medium from '$lib/components/graphics/social/Medium.svelte';
import Showwcase from '$lib/components/graphics/social/Showwcase.svelte';

import type { TagColors } from './components/cards/colors';

export const githubLink = 'https://github.com/ikhsan3adi/';
const linkedInLink = 'https://www.linkedin.com/in/ikhsan-satriadi/';
const whatsappLink = 'https://wa.me/62895338593923';
const emailLink = 'mailto:ikhsansatriadi175@gmail.com';

const githubApiLink = 'https://api.github.com/repos/ikhsan3adi';

const navLinks = [
	{ text: 'Home', link: 'home' },
	{ text: 'About', link: 'about' },
	{ text: 'Portfolio', link: 'portfolio' },
	{ text: 'Tools', link: 'tools' },
	{ text: 'Social', link: 'social' },
	{ text: 'Contact', link: 'contact' }
];

const projects: Project[] = [
	{
		id: 0,
		name: 'Online Auction App',
		url: `${githubApiLink}/flutter-auction-app`,
		description: '',
		imageUrl: 'https://github.com/ikhsan3adi/Flutter-Auction-App/raw/master/images/banner.png',
		readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/flutter-auction-app/master/README.md',
		tags: ['flutter']
	},
	{
		id: 1,
		name: 'Celenganku App Clone',
		url: `${githubApiLink}/flutter-celenganku-clone`,
		description: '',
		imageUrl:
			'https://github.com/ikhsan3adi/flutter_celenganku_app_clone/raw/master/screenshots/screenshot-1.png',
		readmeUrl:
			'https://raw.githubusercontent.com/ikhsan3adi/flutter-celenganku-clone/master/README.md',
		tags: ['flutter']
	},
	{
		id: 2,
		name: 'Sistem Absensi QR Code',
		url: `${githubApiLink}/absensi-sekolah-qr-code`,
		description: '',
		imageUrl:
			'https://github.com/ikhsan3adi/absensi-sekolah-qr-code/raw/master/screenshots/hero.png',
		readmeUrl:
			'https://raw.githubusercontent.com/ikhsan3adi/absensi-sekolah-qr-code/master/README.md',
		tags: ['codeigniter', 'php']
	},
	{
		id: 3,
		name: 'Portfolio website',
		url: `${githubApiLink}/ikhsan3adi.github.io`,
		description: '',
		imageUrl: 'https://github.com/ikhsan3adi/ikhsan3adi.github.io/raw/main/images/preview.png',
		readmeUrl: 'https://raw.githubusercontent.com/ikhsan3adi/ikhsan3adi.github.io/master/README.md',
		tags: ['html', 'typescript']
	}
];

const socials = [
	{
		social: 'Github',
		name: '@ikhsan3adi',
		link: githubLink,
		colorVariant: { key: 'github' } as ColorVariant,
		icon: Github
	},
	{
		social: 'LinkedIn',
		name: 'Ikhsan Satriadi',
		link: linkedInLink,
		colorVariant: { key: 'linkedIn' } as ColorVariant,
		icon: LinkedIn
	},
	{
		social: 'Facebook',
		name: 'Ikhsan Satriadi',
		link: 'https://facebook.com/onetrd',
		colorVariant: { key: 'facebook' } as ColorVariant,
		icon: Facebook
	},
	{
		social: 'Instagram',
		name: '@ikhsan3adi',
		link: 'https://instagram.com/ikhsan3adi',
		colorVariant: { key: 'instagram' } as ColorVariant,
		icon: Instagram
	},
	{
		social: 'Telegram',
		name: 'Ikhsan',
		link: 'https://t.me/xann_xenn_xinn',
		colorVariant: { key: 'telegram' } as ColorVariant,
		icon: Telegram
	},
	{
		social: 'Showwcase',
		name: '@ikhsan3adi',
		link: 'https://www.showwcase.com/ikhsan3adi',
		colorVariant: { key: 'telegram' } as ColorVariant,
		icon: Showwcase
	},
	{
		social: 'Medium',
		name: 'Ikhsan Satriadi',
		link: 'https://medium.com/@ikhsansatriadi175',
		colorVariant: { key: 'medium' } as ColorVariant,
		icon: Medium
	}
];

export const tagColors: TagColors = {
	default: { bg: 'bg-slate-400', border: 'dark:border-slate-400', text: 'dark:text-slate-400' },
	flutter: { bg: 'bg-sky-400', border: 'dark:border-sky-400', text: 'dark:text-sky-400' },
	dart: { bg: 'bg-teal-500', border: 'dark:border-teal-500', text: 'dark:text-teal-500' },
	html: { bg: 'bg-rose-400', border: 'dark:border-rose-400', text: 'dark:text-rose-400' },
	php: { bg: 'bg-indigo-300', border: 'dark:border-indigo-300', text: 'dark:text-indigo-300' },
	codeigniter: { bg: 'bg-red-400', border: 'dark:border-red-400', text: 'dark:text-red-400' },
	javascript: {
		bg: 'bg-yellow-400',
		border: 'dark:border-yellow-400',
		text: 'dark:text-yellow-400'
	},
	typescript: { bg: 'bg-blue-400', border: 'dark:border-blue-400', text: 'dark:text-blue-400' },
	svelte: { bg: 'bg-orange-400', border: 'dark:border-orange-400', text: 'dark:text-orange-400' }
};

export { navLinks, projects, socials, linkedInLink, whatsappLink, emailLink };
