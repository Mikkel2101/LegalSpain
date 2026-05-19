import { no } from './no';
import { en } from './en';
import { es } from './es';

export type Lang = 'no' | 'en' | 'es';

export const translations = { no, en, es } as const;

export type Translations = typeof no;

export function t(lang: Lang): Translations {
  return translations[lang] as Translations;
}

export const langLabels: Record<Lang, string> = {
  no: 'NO',
  en: 'EN',
  es: 'ES',
};

export const langPaths: Record<Lang, string> = {
  no: '/',
  en: '/en/',
  es: '/es/',
};
