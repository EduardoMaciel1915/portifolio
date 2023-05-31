'use client';

import { useState } from 'react';

import { SlArrowDown } from 'react-icons/sl';

import { smoothScroll } from '@/utils';

const ArrowDownNavigate = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 2000);

  return (
    <a
      href="#about"
      onClick={event => smoothScroll(event, 'about')}
      className="hover:scale-110 transition-all ease duration-300 "
    >
      <SlArrowDown
        className={`
          fill-gray-500 
          hover:scale-110 
          transition-opacity ease duration-1000 
          ${isVisible ? 'opacity-100 lg:w-10 lg:h-12 w-6 h-12 ' : 'opacity-0'}
        `}
      />
    </a>
  );
};

export default ArrowDownNavigate;
