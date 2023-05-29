import { Box, Flex, SectionContainer, SectionDivider, SectionTitle } from '@/components';

import { useSelectTextLanguage } from '@/hooks';
import { enHomeText, ptHomeText } from '@/i18n';

export default function Home() {
  const text = useSelectTextLanguage(enHomeText, ptHomeText);

  return (
    <Box className="w-full items-center dark:bg-black">
      <SectionContainer id="home">
        <Box className="gap-4 text-center">
          <h1 className="text-7xl font-bold dark:text-gray-200 mt-60">Eduardo Maciel</h1>
          <span className="text-2xl dark:text-gray-300">{text.subtitle}</span>
        </Box>
      </SectionContainer>

      <SectionDivider />

      <SectionContainer id="about">
        <SectionTitle title={text.about.title} />

        <Flex className="justify-center gap-10 mt-20">
          <Box className="rounded-full w-40 h-40 bg-cover bg-center bg-[url('/img/eduardo-maciel.jpg')]" />
          <Box className="w-1/2">
            <p>{text.about.firstDescription}</p>
            <p>{text.about.secondDescription}</p>
          </Box>
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
