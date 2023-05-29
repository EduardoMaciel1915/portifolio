'use client';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import {
  Box,
  Flex,
  MobileMenu,
  RenderCondition,
  SectionContainer,
  SectionDivider,
  SectionTitle,
} from '@/components';

import { useSelectTextLanguageClient } from '@/hooks';
import { enHomeText, ptHomeText } from '@/i18n';
import { useNavbarStore } from '@/store/navbar';

export default function Home() {
  const text = useSelectTextLanguageClient(enHomeText, ptHomeText);

  const {
    states: { isOpen },
  } = useNavbarStore();

  const defaultStyleIcons = `
    lg:w-8 w-6 lg:h-14 h-12
    cursor-pointer 
    fill-gray-300 
    hover:fill-black 
    transition-all ease duration-200
  `;

  return (
    <>
      <MobileMenu />
      <RenderCondition condition={!isOpen}>
        <Box className="w-full items-center dark:bg-black">
          <SectionContainer id="home">
            <Box className="gap-3 text-center">
              <h1 className="text-3xl lg:text-7xl font-bold dark:text-gray-200 mt-60">
                Eduardo Maciel
              </h1>
              <span className="text-lg lg:text-2xl text-gray-500 dark:text-gray-300">
                {text.subtitle}
              </span>

              <Flex className="w-full justify-center items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/eduardo-maciel-845926197/"
                  target="_blank"
                >
                  <FaLinkedinIn className={defaultStyleIcons} />
                </a>
                <a href="https://github.com/EduardoMaciel1915" target="_blank">
                  <FaGithub className={defaultStyleIcons} />
                </a>
              </Flex>
            </Box>
          </SectionContainer>

          <SectionDivider />

          <SectionContainer id="about">
            <SectionTitle title={text.about.title} />

            <Box
              className={`
                justify-center items-center
                lg:flex-row
                gap-10 mt-20
              `}
            >
              <Box className="rounded-full w-40 h-40 bg-cover bg-center bg-[url('/img/eduardo-maciel.jpg')]" />
              <Box className="w-full lg:w-1/2">
                <p>{text.about.firstDescription}</p>
                <p>{text.about.secondDescription}</p>
              </Box>
            </Box>
          </SectionContainer>

          <SectionDivider />

          <SectionContainer id="projects">
            <SectionTitle title={text.projects.title} direction="right" />

            <Box></Box>
          </SectionContainer>
        </Box>
      </RenderCondition>
    </>
  );
}
