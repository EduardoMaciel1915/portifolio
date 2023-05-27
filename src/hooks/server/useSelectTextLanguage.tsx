'use server';

import { cookies } from 'next/headers';

export const useSelectTextLanguage = <T,>(englishText: T, portugueseText: T): T => {
  const cookieStore = cookies();

  const language = cookieStore.get('language')?.value ?? 'pt-BR';

  return language === 'en-US' ? englishText : portugueseText;
};
