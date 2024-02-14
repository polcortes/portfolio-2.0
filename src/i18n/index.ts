import spanish from './es.json'
import catalan from './ca.json'
import english from './en.json'

export const LANGUAGES = {
  SPANISH: 'es',
  CATALAN: 'ca',
  ENGLISH: 'en'
}

export const getI18N = (
  { currentLocale = 'es' }: 
  { currentLocale: string | undefined }
) => {
  switch (currentLocale) {
    case LANGUAGES.SPANISH:
      return spanish
    case LANGUAGES.CATALAN:
      return catalan
    case LANGUAGES.ENGLISH:
      return english
    default:
      return spanish
  }
}