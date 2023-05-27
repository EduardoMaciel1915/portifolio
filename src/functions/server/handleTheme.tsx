'use server';
import { cookies } from 'next/headers';

export const handleTheme = async () => {
  const cookieStore = cookies();

  const theme = cookieStore.get('theme')?.value ?? 'light';

  switch (theme) {
    case 'light':
      cookieStore.set('theme', 'dark');
      break;
    case 'dark':
      cookieStore.set('theme', 'light');
      break;
  }
};
