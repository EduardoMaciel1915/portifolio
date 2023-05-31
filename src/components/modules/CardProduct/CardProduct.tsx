'use client';

import { useState } from 'react';

import { Box, Button, Flex, RenderCondition } from '@/components';

interface PropsCardProduct {
  title: string;
  github?: string;
  link?: string;
  bgBanner?: string;
}

const CardProduct = ({ title, github, link, bgBanner }: PropsCardProduct) => {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  return (
    <Box
      className={`
        h-72 w-96 
        justify-end 
        hover:scale-110 
        transition-all duration-300 
        relative
      `}
      onMouseEnter={() => setShowMoreInfo(true)}
      onMouseLeave={() => setShowMoreInfo(false)}
    >
      <Box
        className={`
          ${bgBanner} bg-center bg-cover h-full w-full absolute
          z-20
        `}
      />

      <RenderCondition condition={!showMoreInfo}>
        <Box className="bg-[rgba(0,0,0,0.65)] h-full w-full opacity-80 justify-center items-center z-20">
          <h1 className="font-bold text-white text-xl">{title}</h1>
        </Box>
      </RenderCondition>

      <Box
        className={`
          bg-black
          w-full 
          text-white 
          absolute 
          rounded-b-xl
          z-10
          ${showMoreInfo && '-mb-16 h-16'}
          transition-all ease-linear duration-300
        `}
      >
        <Flex className="gap-5 w-full h-full items-center justify-center">
          <a href={github} target="_blank">
            <Button label="github" />
          </a>

          <a href={link} target="_blank">
            <Button label="projeto" />
          </a>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardProduct;
