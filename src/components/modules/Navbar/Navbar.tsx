'use client';

import { Flex, Button, Box, MenuButton } from '@/components';

import { handleLanguage, handleTheme } from '@/functions';
import { useSelectTextLanguageClient } from '@/hooks';
import { enNavbarText, ptNavbarText } from '@/i18n';
import { useState } from 'react';

interface PropsNavbar {
  theme: string;
  language?: string;
}

const Navbar = ({ theme, language }: PropsNavbar) => {
  const [hasBorder, setHasBorder] = useState<boolean>(false);
  const text = useSelectTextLanguageClient(enNavbarText, ptNavbarText, language);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHasBorder(true);
    } else {
      setHasBorder(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Flex
      className={`
        w-full h-16
        justify-around items-center 
        text-black
        ${hasBorder && 'border-b'} border-solid border-gray-100 dark:border-gray-700
        z-30 
        transition-all ease-in-out 
        shadow-inner
        backdrop-filter backdrop-saturate-150 backdrop-blur-sm 
        bg-opacity-80 bg-white dark:bg-black
        sticky
        top-0
      `}
    >
      <Flex className="gap-4">
        <Button label={theme} onClick={() => handleTheme()} />
        <Button variant="secondary" label={language} onClick={() => handleLanguage()} />
      </Flex>

      <Flex className="gap-4 dark:text-gray-200 hidden lg:flex">
        <a href="#">
          <h1>{text.home}</h1>
        </a>

        <a href="#about">
          <h1>{text.about}</h1>
        </a>

        <a href="#projects">
          <h1>{text.projects}</h1>
        </a>
      </Flex>

      <Box className="block lg:hidden">
        <MenuButton />
      </Box>
    </Flex>
  );
};

export default Navbar;
