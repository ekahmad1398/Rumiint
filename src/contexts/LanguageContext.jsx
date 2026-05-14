import { createContext, useContext, useEffect, useState } from 'react'

import { translations } from '../translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem('rumi-language')

  if (savedLanguage === 'en' || savedLanguage === 'fa') {
    return savedLanguage
  }

  return 'en'
}

function getValueByPath(object, path) {
  return path.split('.').reduce((currentValue, key) => currentValue?.[key], object)
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    const isPersian = language === 'fa'

    document.documentElement.lang = isPersian ? 'fa' : 'en'
    document.documentElement.dir = isPersian ? 'rtl' : 'ltr'
    document.body.dataset.lang = language
    window.localStorage.setItem('rumi-language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'fa' : 'en'))
  }

  const t = (path) => {
    const activeTranslations = translations[language]
    const fallbackValue = getValueByPath(translations.en, path)
    return getValueByPath(activeTranslations, path) ?? fallbackValue ?? path
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRTL: language === 'fa',
        t,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
