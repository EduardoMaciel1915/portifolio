'use server';

import { cookies } from 'next/headers';

export const useTheme = () => {
  const cookieStore = cookies();

  const theme = cookieStore.get('theme')?.value ?? 'light';

  return { theme };
};
