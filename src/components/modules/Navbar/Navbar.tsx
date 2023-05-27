'use client';

import { Flex, Button } from '@/components';

import { handleLanguage, handleTheme } from '@/functions';
import { useSelectTextLanguageClient } from '@/hooks';
import { enNavbarText, ptNavbarText } from '@/i18n';

interface PropsNavbar {
  theme: string;
  language?: string;
}

const Navbar = ({ theme, language }: PropsNavbar) => {
  const text = useSelectTextLanguageClient(enNavbarText, ptNavbarText, language);

  return (
    <Flex
      className={`
        w-full h-16
        justify-around items-center 
        text-black
        border-b border-solid border-gray-300
        z-30 
        transition duration-300 ease-in-out 
        shadow-inner translateZ-0 
        backdrop-filter backdrop-saturate-180 backdrop-blur-5 
        bg-opacity-80 bg-white dark:bg-black
        sticky
        top-0
      `}
    >
      <Flex className="gap-4">
        <Button label={theme} onClick={() => handleTheme()} />
        <Button variant="secondary" label={language} onClick={() => handleLanguage()} />
      </Flex>

      <Flex className="gap-4 dark:text-gray-200">
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
    </Flex>
  );
};

export default Navbar;
