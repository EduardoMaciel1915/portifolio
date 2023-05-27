'use server';
import { cookies } from 'next/headers';

export const handleLanguage = async () => {
  const cookieStore = cookies();

  const language = cookieStore.get('language')?.value ?? 'pt-BR';

  switch (language) {
    case 'pt-BR':
      cookieStore.set('language', 'en-US');
      break;
    case 'en-US':
      cookieStore.set('language', 'pt-BR');
      break;
  }
};
