import { Box, Flex } from '@/components';

export default function Home() {
  return (
    <Flex className="h-screen w-full justify-center dark:bg-black">
      <Box className="pt-24 gap-4 text-center">
        <h1 className="text-7xl font-bold dark:text-gray-200">Eduardo Maciel</h1>
        <span className="text-3xl font-normal dark:text-gray-300">
          Font-end Developer
        </span>
      </Box>
    </Flex>
  );
}
