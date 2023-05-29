import { Box } from '@/components/elements';

interface PropsSectionContainer {
  children: React.ReactNode;
  id?: string;
}

const SectionContainer = ({ children, id }: PropsSectionContainer) => {
  return (
    <Box id={id} className="h-screen w-full py-20 max-w-screen-xl">
      {children}
    </Box>
  );
};

export default SectionContainer;
