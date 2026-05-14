import type { ButtonColorVariant } from '$lib/components/colors';
import { FULL_NAME, USERNAME } from '$lib/config';

export const githubLink = 'https://github.com/ikhsan3adi/';
export const codebergLink = 'https://codeberg.org/ikhsan3adi';
export const linkedInLink = 'https://www.linkedin.com/in/ikhsan3adi/';

export interface Social {
  social: string;
  name: string;
  link: string;
  colorVariant: ButtonColorVariant;
  icon: string;
}

export const socials: Social[] = [
  {
    social: 'Github',
    name: `@${USERNAME}`,
    link: githubLink,
    colorVariant: { key: 'github' },
    icon: 'simple-icons:github'
  },
  {
    social: 'LinkedIn',
    name: FULL_NAME,
    link: linkedInLink,
    colorVariant: { key: 'linkedIn' },
    icon: 'simple-icons:linkedin'
  },
  {
    social: 'Facebook',
    name: FULL_NAME,
    link: 'https://facebook.com/onetrd',
    colorVariant: { key: 'facebook' },
    icon: 'simple-icons:facebook'
  },
  {
    social: 'Instagram',
    name: `@${USERNAME}`,
    link: 'https://instagram.com/ikhsan3adi',
    colorVariant: { key: 'instagram' },
    icon: 'simple-icons:instagram'
  },
  {
    social: 'X',
    name: `@${USERNAME}`,
    link: 'https://x.com/ikhsan3adi',
    colorVariant: { key: 'x' },
    icon: 'simple-icons:x'
  },
  {
    social: 'Hackerrank',
    name: FULL_NAME,
    link: 'https://www.hackerrank.com/profile/ikhsan3adi',
    colorVariant: { key: 'hackerrank' },
    icon: 'simple-icons:hackerrank'
  },
  {
    social: 'Codewars',
    name: FULL_NAME,
    link: 'https://www.codewars.com/users/ikhsan3adi',
    colorVariant: { key: 'email' },
    icon: 'simple-icons:codewars'
  },
  {
    social: 'Codeforces',
    name: FULL_NAME,
    link: 'https://codeforces.com/profile/ikhsan3adi',
    colorVariant: { key: 'codeforces' },
    icon: 'simple-icons:codeforces'
  },
  {
    social: 'Gitlab',
    name: `@${USERNAME}`,
    link: 'https://gitlab.com/ikhsan3adi',
    colorVariant: { key: 'gitlab' },
    icon: 'simple-icons:gitlab'
  },
  {
    social: 'Codeberg',
    name: `@${USERNAME}`,
    link: 'https://codeberg.org/ikhsan3adi',
    colorVariant: { key: 'linkedIn' },
    icon: 'simple-icons:codeberg'
  }
  // {
  //   social: 'Showwcase',
  //   name: `@${USERNAME}`,
  //   link: 'https://www.showwcase.com/ikhsan3adi',
  //   colorVariant: { key: 'telegram' },
  //   icon: 'simple-icons:showwcase'
  // },
  // {
  //   social: 'Medium',
  //   name: FULL_NAME,
  //   link: 'https://medium.com/@ikhsan3adi',
  //   colorVariant: { key: 'medium' },
  //   icon: 'simple-icons:medium'
  // }
];
