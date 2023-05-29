'use client';

import { Box } from '@/components';
import { useSelectTextLanguageClient } from '@/hooks';
import { enNavbarText, ptNavbarText } from '@/i18n';
import { useNavbarStore } from '@/store/navbar';

const MobileMenu = () => {
  const {
    states: { isOpen },
    actions: { toggleIsOpen },
  } = useNavbarStore();

  const text = useSelectTextLanguageClient(enNavbarText, ptNavbarText);

  const handleWidth = isOpen ? 'w-full block' : 'w-0 hidden';

  return (
    <Box
      className={`
        ${handleWidth}
        h-screen 
        right-0
        absolute
        bg-white
        p-10
        gap-5
      `}
    >
      <a href="#home" onClick={toggleIsOpen}>
        <h1>{text.home}</h1>
      </a>

      <a href="#about" onClick={toggleIsOpen}>
        <h1>{text.about}</h1>
      </a>

      <a href="#projects" onClick={toggleIsOpen}>
        <h1>{text.projects}</h1>
      </a>
    </Box>
  );
};

export default MobileMenu;
