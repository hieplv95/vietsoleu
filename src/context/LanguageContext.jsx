/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { initialTranslations, languageLoaders } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('vietsol-lang') || 'vi'
  })
  const [loadedTranslations, setLoadedTranslations] = useState(initialTranslations)

  useEffect(() => {
    let isMounted = true
    if (language !== 'vi' && !loadedTranslations[language] && languageLoaders[language]) {
      languageLoaders[language]().then(dict => {
        if (isMounted) {
          setLoadedTranslations(prev => ({
            ...prev,
            [language]: dict
          }))
        }
      }).catch(err => {
        console.error(`Failed to load translation for ${language}:`, err)
      })
    }
    return () => {
      isMounted = false
    }
  }, [language, loadedTranslations])

  const setLanguage = (lang) => {
    setLanguageState(lang)
    localStorage.setItem('vietsol-lang', lang)
  }

  // Translation function helper
  const t = (path) => {
    const keys = path.split('.')
    let current = loadedTranslations[language]
    if (current) {
      for (const key of keys) {
        if (current && current[key] !== undefined) {
          current = current[key]
        } else {
          current = null
          break
        }
      }
    }
    if (current !== null && current !== undefined) {
      return current
    }

    // Fallback to Vietnamese if translation key doesn't exist in current language
    let fallback = loadedTranslations['vi'] || initialTranslations['vi']
    for (const k of keys) {
      if (fallback && fallback[k] !== undefined) {
        fallback = fallback[k]
      } else {
        fallback = null
        break
      }
    }
    return fallback || path
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
