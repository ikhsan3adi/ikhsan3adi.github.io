import type { ButtonColorVariant } from '$lib/components/colors';

// ICONS
import Facebook from '$lib/components/graphics/social/Facebook.svelte';
import Github from '$lib/components/graphics/social/Github.svelte';
import Instagram from '$lib/components/graphics/social/Instagram.svelte';
import LinkedIn from '$lib/components/graphics/social/Linkedin.svelte';
// import Medium from '$lib/components/graphics/social/Medium.svelte';
// import Showwcase from '$lib/components/graphics/social/Showwcase.svelte';
import Codeberg from '$lib/components/graphics/social/Codeberg.svelte';
import Codewars from '$lib/components/graphics/social/Codewars.svelte';
import Hackerrank from '$lib/components/graphics/social/Hackerrank.svelte';
import Telegram from '$lib/components/graphics/social/Telegram.svelte';

// LINKS
export const githubLink = 'https://github.com/ikhsan3adi/';
export const codebergLink = 'https://codeberg.org/ikhsan3adi';
export const linkedInLink = 'https://www.linkedin.com/in/ikhsan3adi/';
export const whatsappLink = 'https://wa.me/62895338593923';
export const emailLink = 'mailto:ikhsansatriadi175@gmail.com';

export const socials = [
  {
    social: 'Github',
    name: '@ikhsan3adi',
    link: githubLink,
    colorVariant: { key: 'github' } as ButtonColorVariant,
    icon: Github
  },
  {
    social: 'LinkedIn',
    name: 'Ikhsan Satriadi',
    link: linkedInLink,
    colorVariant: { key: 'linkedIn' } as ButtonColorVariant,
    icon: LinkedIn
  },
  {
    social: 'Facebook',
    name: 'Ikhsan Satriadi',
    link: 'https://facebook.com/onetrd',
    colorVariant: { key: 'facebook' } as ButtonColorVariant,
    icon: Facebook
  },
  {
    social: 'Instagram',
    name: '@ikhsan3adi',
    link: 'https://instagram.com/ikhsan3adi',
    colorVariant: { key: 'instagram' } as ButtonColorVariant,
    icon: Instagram
  },
  {
    social: 'Telegram',
    name: 'Ikhsan',
    link: 'https://t.me/ikhsan3adi',
    colorVariant: { key: 'telegram' } as ButtonColorVariant,
    icon: Telegram
  },
  {
    social: 'Hackerrank',
    name: 'Ikhsan Satriadi',
    link: 'https://www.hackerrank.com/profile/ikhsan3adi',
    colorVariant: { key: 'hackerrank' } as ButtonColorVariant,
    icon: Hackerrank
  },
  {
    social: 'Codewars',
    name: 'Ikhsan Satriadi',
    link: 'https://www.codewars.com/users/ikhsan3adi',
    colorVariant: { key: 'email' } as ButtonColorVariant,
    icon: Codewars
  },
  {
    social: 'Codeberg',
    name: '@ikhsan3adi',
    link: 'https://codeberg.org/ikhsan3adi',
    colorVariant: { key: 'linkedIn' } as ButtonColorVariant,
    icon: Codeberg
  }
  // {
  //   social: 'Showwcase',
  //   name: '@ikhsan3adi',
  //   link: 'https://www.showwcase.com/ikhsan3adi',
  //   colorVariant: { key: 'telegram' } as ButtonColorVariant,
  //   icon: Showwcase
  // },
  // {
  //   social: 'Medium',
  //   name: 'Ikhsan Satriadi',
  //   link: 'https://medium.com/@ikhsan3adi',
  //   colorVariant: { key: 'medium' } as ButtonColorVariant,
  //   icon: Medium
  // }
];
