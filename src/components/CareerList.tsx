import { Flex, VStack, Heading } from '@chakra-ui/react';
import { CareerModule } from 'components/module/CareerModule';
import { career } from 'constant/myCareer';

export const CareerList = () => {
  return (
    <Flex flexDirection="column" justifyContent="left" w="50%">
      <Heading
        fontSize="1.25em"
        textAlign={{ base: 'center', sm: 'start' }}
        mb="4em"
      >
        経歴
      </Heading>
      <VStack alignItems="flex-start" textAlign="justify" spacing={16}>
        {career.map((content) => (
          <CareerModule key={content.year} {...content} />
        ))}
      </VStack>
    </Flex>
  );
};
