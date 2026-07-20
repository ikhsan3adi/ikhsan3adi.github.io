import type { ButtonColorVariants } from '$lib/components/colors';
import { FULL_NAME, USERNAME } from '$lib/config';

export const githubLink = 'https://github.com/ikhsan3adi/';
export const codebergLink = 'https://codeberg.org/ikhsan3adi';
export const linkedInLink = 'https://www.linkedin.com/in/ikhsan3adi/';

export interface Social {
  social: string;
  name: string;
  link: string;
  colorVariant: keyof ButtonColorVariants;
  icon: string;
}

export const socials: Social[] = [
  {
    social: 'Github',
    name: `@${USERNAME}`,
    link: githubLink,
    colorVariant: 'github',
    icon: 'simple-icons:github'
  },
  {
    social: 'LinkedIn',
    name: FULL_NAME,
    link: linkedInLink,
    colorVariant: 'linkedIn',
    icon: 'simple-icons:linkedin'
  },
  {
    social: 'Facebook',
    name: FULL_NAME,
    link: 'https://facebook.com/onetrd',
    colorVariant: 'facebook',
    icon: 'simple-icons:facebook'
  },
  {
    social: 'Instagram',
    name: `@${USERNAME}`,
    link: 'https://instagram.com/ikhsan3adi',
    colorVariant: 'instagram',
    icon: 'simple-icons:instagram'
  },
  {
    social: 'Threads',
    name: `@${USERNAME}`,
    link: 'https://www.threads.net/@ikhsan3adi',
    colorVariant: 'threads',
    icon: 'simple-icons:threads'
  },
  {
    social: 'X',
    name: `@${USERNAME}`,
    link: 'https://x.com/ikhsan3adi',
    colorVariant: 'x',
    icon: 'simple-icons:x'
  },
  {
    social: 'LeetCode',
    name: USERNAME,
    link: 'https://leetcode.com/u/ikhsan3adi/',
    colorVariant: 'codeforces',
    icon: 'simple-icons:leetcode'
  },
  {
    social: 'Codewars',
    name: USERNAME,
    link: 'https://www.codewars.com/users/ikhsan3adi',
    colorVariant: 'email',
    icon: 'simple-icons:codewars'
  },
  {
    social: 'Codeforces',
    name: USERNAME,
    link: 'https://codeforces.com/profile/ikhsan3adi',
    colorVariant: 'codeforces',
    icon: 'simple-icons:codeforces'
  },
  {
    social: 'Hackerrank',
    name: USERNAME,
    link: 'https://www.hackerrank.com/profile/ikhsan3adi',
    colorVariant: 'hackerrank',
    icon: 'simple-icons:hackerrank'
  },
  {
    social: 'Gitlab',
    name: `@${USERNAME}`,
    link: 'https://gitlab.com/ikhsan3adi',
    colorVariant: 'gitlab',
    icon: 'simple-icons:gitlab'
  },
  {
    social: 'Codeberg',
    name: `@${USERNAME}`,
    link: 'https://codeberg.org/ikhsan3adi',
    colorVariant: 'linkedIn',
    icon: 'simple-icons:codeberg'
  }
  // {
  //   social: 'Showwcase',
  //   name: `@${USERNAME}`,
  //   link: 'https://www.showwcase.com/ikhsan3adi',
  //   colorVariant:  'telegram',
  //   icon: 'simple-icons:showwcase'
  // },
  // {
  //   social: 'Medium',
  //   name: FULL_NAME,
  //   link: 'https://medium.com/@ikhsan3adi',
  //   colorVariant:  'medium',
  //   icon: 'simple-icons:medium'
  // }
];
