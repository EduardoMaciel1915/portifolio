import { Box } from '@/components/elements';

interface PropsSectionTitle {
  title: string;
  direction?: 'right' | 'left';
}

const SectionTitle = ({ title, direction }: PropsSectionTitle) => {
  const directionText = direction === 'right' && 'text-end items-end';

  return (
    <Box
      className={`
        w-full 
        ${directionText}
      `}
    >
      <h1
        className={`
          text-3xl font-bold dark:text-gray-200
        `}
      >
        {title}
      </h1>
      <Box className="h-2 mt-2 w-20 bg-black dark:bg-white"></Box>
    </Box>
  );
};

export default SectionTitle;
