import { RenderCondition, IcPageLoading, Flex } from '@/components';

interface PropsPageLoading {
  loading?: boolean;
}

const PageLoading: React.FC<PropsPageLoading> = ({ loading }) => {
  return (
    <RenderCondition condition={loading}>
      <Flex className="flex items-center justify-center w-screen h-screen fixed overflow-hidden max-w-screen top-0 left-0 z-50">
        <IcPageLoading width="5rem" height="5rem" />
      </Flex>
    </RenderCondition>
  );
};

export default PageLoading;
