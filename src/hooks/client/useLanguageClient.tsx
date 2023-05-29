'use client';

import { getCookie } from 'cookies-next';

export const useLanguageClient = () => {
  const language = getCookie('language');

  return { language };
};
