interface TagColor {
  bg: string;
  border: string;
  text: string;
}

interface TagColors {
  default: TagColor;
  flutter: TagColor;
  dart: TagColor;
  android: TagColor;
  html: TagColor;
  php: TagColor;
  codeigniter: TagColor;
  laravel: TagColor;
  blade: TagColor;
  javascript: TagColor;
  typescript: TagColor;
  nestjs: TagColor;
  svelte: TagColor;
  mysql: TagColor;
  bootstrap: TagColor;
  postgresql: TagColor;
  hono: TagColor;
  pgvector: TagColor;
  'ai-agent': TagColor;
  chatbot: TagColor;
  bun: TagColor;
  react: TagColor;
  telegram: TagColor;
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
  orange: CardColor;
  cyan: CardColor;
  amber: CardColor;
  indigo: CardColor;
  rose: CardColor;
  emerald: CardColor;
  fuchsia: CardColor;
  lime: CardColor;
  pink: CardColor;
  teal: CardColor;
}

export type { CardColorsVariant as CardColors, CardColor, TagColorKey, TagColors };
