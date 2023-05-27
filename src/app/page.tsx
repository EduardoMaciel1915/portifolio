import { Box, Flex } from '@/components';

import { useSelectTextLanguage } from '@/hooks';
import { enHomeText, ptHomeText } from '@/i18n';

export default function Home() {
  const text = useSelectTextLanguage(enHomeText, ptHomeText);

  return (
    <Flex className="h-screen w-full justify-center dark:bg-black">
      <Box className="pt-24 gap-4 text-center">
        <h1 className="text-7xl font-bold dark:text-gray-200">Eduardo Maciel</h1>
        <span className="text-3xl font-normal dark:text-gray-300">{text.subtitle}</span>
      </Box>
    </Flex>
  );
}
