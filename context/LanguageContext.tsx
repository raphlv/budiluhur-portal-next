'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageOption, availableLanguages, translations } from '@/lib/translations';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  availableLanguages: LanguageOption[];
  isId: boolean;
  isEn: boolean;
  isZh: boolean;
  isJa: boolean;
  isKo: boolean;
  isAr: boolean;
  currentLanguageOption: LanguageOption;
  t: (path: string, fallback?: string) => string;
}

const validLanguages: Language[] = ['id', 'en', 'zh', 'ja', 'ko', 'ar'];

const defaultT = (path: string, fallback: string = '', currentLang: Language = 'id'): string => {
  try {
    const parts = path.split('.');
    let current: any = translations;

    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        return fallback || path;
      }
    }

    if (current && typeof current === 'object') {
      return current[currentLang] || current['en'] || current['id'] || fallback || path;
    }

    return typeof current === 'string' ? current : fallback || path;
  } catch {
    return fallback || path;
  }
};

const defaultContext: LanguageContextType = {
  lang: 'id',
  setLang: () => {},
  availableLanguages,
  isId: true,
  isEn: false,
  isZh: false,
  isJa: false,
  isKo: false,
  isAr: false,
  currentLanguageOption: availableLanguages[0],
  t: (path: string, fallback?: string) => defaultT(path, fallback, 'id'),
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('id');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ubl_lang') as Language;
      if (saved && validLanguages.includes(saved)) {
        setLangState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      }
    } catch {}
  }, []);

  const setLang = (newLang: Language) => {
    if (!validLanguages.includes(newLang)) return;
    setLangState(newLang);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('ubl_lang', newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      }
    } catch {}
  };

  const currentLanguageOption =
    availableLanguages.find((l) => l.code === lang) || availableLanguages[0];

  const t = (path: string, fallback: string = ''): string => {
    return defaultT(path, fallback, lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        availableLanguages,
        isId: lang === 'id',
        isEn: lang === 'en',
        isZh: lang === 'zh',
        isJa: lang === 'ja',
        isKo: lang === 'ko',
        isAr: lang === 'ar',
        currentLanguageOption,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  try {
    const context = useContext(LanguageContext);
    return context || defaultContext;
  } catch {
    return defaultContext;
  }
};

