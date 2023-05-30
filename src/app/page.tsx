import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {
  SiAngularjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

import {
  ArrowDownNavigate,
  Box,
  Flex,
  IcNextJs,
  SectionContainer,
  SectionDivider,
  SectionTitle,
} from '@/components';

import { useSelectTextLanguage } from '@/hooks';
import { enHomeText, ptHomeText } from '@/i18n';

export default function Home() {
  const text = useSelectTextLanguage(enHomeText, ptHomeText);

  const defaultStyleIcons = `
    lg:w-8 w-6 lg:h-14 h-12
    cursor-pointer 
    fill-gray-300 
    hover:fill-black 
    transition-all ease duration-200
  `;

  const defaultStyleIconsSkills = `
    lg:w-16 lg:h-20 w-6 h-12
    cursor-pointer 
    fill-black
    hover:fill-gray-600 
    transition-all ease duration-200
    hover:scale-110
  `;

  return (
    <Box className="w-full items-center dark:bg-black">
      <SectionContainer id="home">
        <Flex className="flex-col justify-between h-screen items-center">
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

          <ArrowDownNavigate />
        </Flex>
      </SectionContainer>

      <SectionDivider />

      <SectionContainer id="about">
        <SectionTitle title={text.about.title} />

        <Box
          className={`
                justify-center items-center
                lg:flex-row
                gap-10 mt-10 lg:mt-20
              `}
        >
          <Box className="rounded-full w-28 h-28 lg:w-40 lg:h-40 bg-cover bg-center bg-[url('/img/eduardo-maciel.jpg')]" />
          <Box className="w-full lg:w-1/2 dark:text-white">
            <p>{text.about.firstDescription}</p>
            <p>{text.about.secondDescription}</p>
          </Box>
        </Box>

        <Flex className="gap-4 lg:gap-8 w-full justify-center mt-5 lg:mt-10 flex-wrap">
          <SiHtml5 className={defaultStyleIconsSkills} />
          <SiCss3 className={defaultStyleIconsSkills} />
          <SiJavascript className={defaultStyleIconsSkills} />
          <SiTypescript className={defaultStyleIconsSkills} />
          <SiReact className={defaultStyleIconsSkills} />
          <SiAngularjs className={defaultStyleIconsSkills} />
          <IcNextJs className={defaultStyleIconsSkills} />
        </Flex>
      </SectionContainer>

      <SectionDivider />

      <SectionContainer id="projects">
        <SectionTitle title={text.projects.title} direction="right" />

        <Box></Box>
      </SectionContainer>
    </Box>
  );
}
