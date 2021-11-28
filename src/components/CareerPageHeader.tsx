import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { ButtonParts } from 'components/parts/ButtonParts';

export const CareerPageHeader = () => {
  const router = useRouter();
  const routerBack = useCallback(() => router.back(), []);

  return (
    <Flex width="100%">
      <Box width="100%" mr="2em" mb="2em">
        <ButtonParts label={'＜　戻る'} callback={routerBack} />
      </Box>
    </Flex>
  );
};
