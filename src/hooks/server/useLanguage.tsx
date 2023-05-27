'use server';

import { cookies } from 'next/headers';

export const useLanguage = () => {
  const cookieStore = cookies();

  const language = cookieStore.get('language')?.value;

  return { language };
};
