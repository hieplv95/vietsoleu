/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('vietsol-lang') || 'vi'
  })

  const setLanguage = (lang) => {
    setLanguageState(lang)
    localStorage.setItem('vietsol-lang', lang)
  }

  // Translation function helper
  const t = (path) => {
    const keys = path.split('.')
    let current = translations[language]
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        // Fallback to Vietnamese if translation key doesn't exist in English
        let fallback = translations['vi']
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
    }
    return current
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
