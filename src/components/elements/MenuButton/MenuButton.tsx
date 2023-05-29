'use client';

import { Box } from '@/components';
import { useNavbarStore } from '@/store/navbar';

const MenuButton = () => {
  const {
    actions: { toggleIsOpen },
    states: { isOpen },
  } = useNavbarStore();

  const styleLine = `
    w-full 
    border-t border-solid border-black dark:border-white
    transition-all ease-linear
  `;

  return (
    <a href="#">
      <Box className="w-5 cursor-pointer" onClick={toggleIsOpen}>
        <Box
          className={`${styleLine} ${
            isOpen && 'transform translate-y-0 rotate-[-45deg]'
          }`}
        />
        <Box
          className={`${styleLine} ${
            isOpen ? 'transform translate-y-0 rotate-[45deg]' : 'mt-2'
          }`}
        />
      </Box>
    </a>
  );
};

export default MenuButton;
