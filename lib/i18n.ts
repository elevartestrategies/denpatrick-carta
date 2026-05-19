import type { Lang } from './carta-data'

export const ui: Record<string, Record<Lang, string>> = {
  benvinguts: {
    ca: 'Benvinguts',
    es: 'Bienvenidos',
    fr: 'Bienvenue',
  },
  triaIdioma: {
    ca: 'Tria el teu idioma',
    es: 'Elige tu idioma',
    fr: 'Choisissez votre langue',
  },
  carta: {
    ca: 'Carta',
    es: 'Carta',
    fr: 'Carte',
  },
  tornar: {
    ca: '← Tornar',
    es: '← Volver',
    fr: '← Retour',
  },
  tornarCategories: {
    ca: '← Tornar a categories',
    es: '← Volver a categorías',
    fr: '← Retour aux catégories',
  },
  sensGluten: {
    ca: 'Sense gluten',
    es: 'Sin gluten',
    fr: 'Sans gluten',
  },
  vegan: {
    ca: 'Vegà',
    es: 'Vegano',
    fr: 'Vegan',
  },
  temporada: {
    ca: 'Temporada',
    es: 'Temporada',
    fr: 'Saison',
  },
  preusPoden: {
    ca: 'Els preus poden variar. Consulta\'ns per a al·lèrgies i intoleràncies.',
    es: 'Los precios pueden variar. Consúltanos para alergias e intolerancias.',
    fr: 'Les prix peuvent varier. Consultez-nous pour les allergies et intolérances.',
  },
  cartaHivern: {
    ca: 'Carta de tardor–hivern',
    es: 'Carta de otoño–invierno',
    fr: 'Carte automne–hiver',
  },
  horari: {
    ca: 'Horari',
    es: 'Horario',
    fr: 'Horaires',
  },
  horariHivern1: {
    ca: 'Dl, Dt i Dg: 16h – 22h',
    es: 'L, M y D: 16h – 22h',
    fr: 'L, M et D : 16h – 22h',
  },
  horariHivern2: {
    ca: 'Dv, Ds: 16h – 23h',
    es: 'V, S: 16h – 23h',
    fr: 'V, S : 16h – 23h',
  },
  festius: {
    ca: 'Festius: obert',
    es: 'Festivos: abiertos',
    fr: 'Jours fériés : ouvert',
  },
  langNames: {
    ca: '🏴󠁥󠁳󠁣󠁴󠁿 Català',
    es: '🇪🇸 Castellano',
    fr: '🇫🇷 Français',
  },
}

export function t(key: string, lang: Lang): string {
  return ui[key]?.[lang] ?? key
}

export const LANGS: Lang[] = ['ca', 'es', 'fr']

export const LANG_NAMES: Record<Lang, string> = {
  ca: '🏴󠁥󠁳󠁣󠁴󠁿 Català',
  es: '🇪🇸 Castellano',
  fr: '🇫🇷 Français',
}
