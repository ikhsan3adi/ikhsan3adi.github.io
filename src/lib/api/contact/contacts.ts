import type { ButtonColorVariants } from '$lib/components/colors';
import { FULL_NAME } from '$lib/config';

export const whatsappLink = 'https://wa.me/62895338593923';
export const emailLink = 'mailto:ikhsan3adi@proton.me';

export interface Contact {
  contact: string;
  name: string;
  link: string;
  colorVariant: keyof ButtonColorVariants;
  icon: string;
}

export const contacts: Contact[] = [
  {
    contact: 'Chat on Telegram',
    name: FULL_NAME,
    link: 'https://t.me/ikhsan3adi',
    colorVariant: 'telegram',
    icon: 'simple-icons:telegram'
  },
  {
    contact: 'WhatsApp Me!',
    name: FULL_NAME,
    link: whatsappLink,
    colorVariant: 'whatsapp',
    icon: 'simple-icons:whatsapp'
  },
  {
    contact: 'Discord!',
    name: FULL_NAME,
    link: 'https://discord.com/users/581291080067055617',
    colorVariant: 'linkedIn',
    icon: 'simple-icons:discord'
  },
  {
    contact: 'Email Me!',
    name: FULL_NAME,
    link: emailLink,
    colorVariant: 'email',
    icon: 'simple-icons:gmail'
  }
];
