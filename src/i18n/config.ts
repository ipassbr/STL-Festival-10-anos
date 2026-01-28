export const languages = {
  'pt-BR': 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'pt-BR';

export const showDefaultLang = false;

export const routes = {
  'pt-BR': {},
  en: {
    home: 'home',
  },
  es: {
    home: 'inicio',
  },
} as const;
