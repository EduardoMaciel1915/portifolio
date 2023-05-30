'use client';

import { SlArrowDown } from 'react-icons/sl';

import { smoothScroll } from '@/utils';

const ArrowDownNavigate = () => {
  return (
    <a href="#about" onClick={event => smoothScroll(event, 'about')}>
      <SlArrowDown className="lg:w-10 lg:h-12 w-6 h-12 fill-gray-500 hover:scale-110 transition-all ease duration-200" />
    </a>
  );
};

export default ArrowDownNavigate;
