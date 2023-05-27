'use client';

import { useState } from 'react';

import { Box } from '@/components';

const MenuButton = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const styleLine = `
    w-full 
    border-t border-solid border-black dark:border-white
    transition-all ease-linear
  `;

  return (
    <Box
      className="w-5 cursor-pointer"
      onClick={() => setOpenMenu(menuOpen => !menuOpen)}
    >
      <Box
        className={`${styleLine} ${
          openMenu && 'transform translate-y-0 rotate-[-45deg]'
        }`}
      />
      <Box
        className={`${styleLine} ${
          openMenu ? 'transform translate-y-0 rotate-[45deg]' : 'mt-2'
        }`}
      />
    </Box>
  );
};

export default MenuButton;
