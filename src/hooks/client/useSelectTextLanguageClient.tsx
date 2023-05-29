'use client';

import { getCookie } from 'cookies-next';

export const useSelectTextLanguageClient = <T,>(
  englishText: T,
  portugueseText: T,
  language?: string
) => {
  const languageCookie = language ?? getCookie('language');

  switch (languageCookie) {
    case 'en-US':
      return englishText;
    case 'pt-BR':
      return portugueseText;
    default:
      return portugueseText;
  }
};
