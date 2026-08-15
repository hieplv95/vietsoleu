import { vi } from './data/translations_vi'

// Default translations loaded statically (Vietnamese is primary language)
export const initialTranslations = {
  vi,
}

// Dynamic language loader map for on-demand loading
export const languageLoaders = {
  en: () => import('./data/translations_en').then(m => m.en),
  es: () => import('./data/translations_es').then(m => m.es),
  fr: () => import('./data/translations_fr').then(m => m.fr),
  de: () => import('./data/translations_de').then(m => m.de),
  cs: () => import('./data/translations_cs').then(m => m.cs),
  pt: () => import('./data/translations_pt').then(m => m.pt),
}
