import type { Lang } from './carta-data'

export const ui: Record<string, Record<Lang, string>> = {
  benvinguts: {
    ca: 'Benvinguts',
    es: 'Bienvenidos',
    fr: 'Bienvenue',
    en: 'Welcome',
  },
  triaIdioma: {
    ca: 'Tria el teu idioma',
    es: 'Elige tu idioma',
    fr: 'Choisissez votre langue',
    en: 'Choose your language',
  },
  carta: {
    ca: 'Carta',
    es: 'Carta',
    fr: 'Carte',
    en: 'Menu',
  },
  tornar: {
    ca: '← Tornar',
    es: '← Volver',
    fr: '← Retour',
    en: '← Back',
  },
  tornarCategories: {
    ca: '← Tornar a categories',
    es: '← Volver a categorías',
    fr: '← Retour aux catégories',
    en: '← Back to categories',
  },
  sensGluten: {
    ca: 'Sense gluten',
    es: 'Sin gluten',
    fr: 'Sans gluten',
    en: 'Gluten-free',
  },
  vegan: {
    ca: 'Vegà',
    es: 'Vegano',
    fr: 'Vegan',
    en: 'Vegan',
  },
  temporada: {
    ca: 'Temporada',
    es: 'Temporada',
    fr: 'Saison',
    en: 'Seasonal',
  },
  preusPoden: {
    ca: "Els preus poden variar. Consulta'ns per a al·lèrgies i intoleràncies.",
    es: 'Los precios pueden variar. Consúltanos para alergias e intolerancias.',
    fr: 'Les prix peuvent varier. Consultez-nous pour les allergies et intolérances.',
    en: 'Prices may vary. Ask us about allergies and intolerances.',
  },
  cartaHivern: {
    ca: 'Carta de tardor–hivern',
    es: 'Carta de otoño–invierno',
    fr: 'Carte automne–hiver',
    en: 'Autumn–winter menu',
  },
  horari: {
    ca: 'Horari',
    es: 'Horario',
    fr: 'Horaires',
    en: 'Hours',
  },
  horariHivern1: {
    ca: 'Dl, Dt i Dg: 16h – 22h',
    es: 'L, M y D: 16h – 22h',
    fr: 'L, M et D : 16h – 22h',
    en: 'Mon, Tue & Sun: 4pm – 10pm',
  },
  horariHivern2: {
    ca: 'Dv, Ds: 16h – 23h',
    es: 'V, S: 16h – 23h',
    fr: 'V, S : 16h – 23h',
    en: 'Fri, Sat: 4pm – 11pm',
  },
  festius: {
    ca: 'Festius: obert',
    es: 'Festivos: abiertos',
    fr: 'Jours fériés : ouvert',
    en: 'Bank holidays: open',
  },
  canviarIdioma: {
    ca: 'Canviar idioma',
    es: 'Cambiar idioma',
    fr: 'Changer de langue',
    en: 'Change language',
  },
  langNames: {
    ca: '🏴󠁥󠁳󠁣󠁴󠁿 Català',
    es: '🇪🇸 Castellano',
    fr: '🇫🇷 Français',
    en: '🇬🇧 English',
  },
}

export function t(key: string, lang: Lang): string {
  return ui[key]?.[lang] ?? key
}

export const LANGS: Lang[] = ['ca', 'es', 'fr', 'en']

export const LANG_NAMES: Record<Lang, string> = {
  ca: '🏴󠁥󠁳󠁣󠁴󠁿 Català',
  es: '🇪🇸 Castellano',
  fr: '🇫🇷 Français',
  en: '🇬🇧 English',
}
