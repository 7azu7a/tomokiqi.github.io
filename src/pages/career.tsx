import { Flex, Box, VStack, HStack, Text, Heading } from '@chakra-ui/react';
import { ButtonParts } from 'components/parts/ButtonParts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { career } from 'constant/myCareer';

const Career: React.VFC = () => {
  const router = useRouter();
  const routerBack = useCallback(() => router.back(), []);

  const EyeCatchImage = ({ imagePath }: { imagePath: string }) => (
    <Flex
      pos="relative"
      minHeight="100%"
      bgSize="cover"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgPos="-320px center"
      bgImage={`/${imagePath}`}
      w="100%"
      h="100vh"
    />
  );

  const formatText = (msg: string) => {
    return msg.split(/(\n)/g).map((t) => (t === '\n' ? <br /> : t));
  };

  return (
    <Flex w="100%" flexDirection="column">
      <Box pos="fixed" top="2em" left="2em" zIndex={1}>
        <ButtonParts label={'＜　戻る'} callback={routerBack} />
      </Box>
      <Flex w="100%">
        <Flex w="100%" flexDirection="column">
          {career.map((history) => (
            <HStack w="100%">
              <Flex w="50%">
                <EyeCatchImage imagePath={history.cover} />
              </Flex>
              <VStack
                key={history.year}
                justifyContent="center"
                alignItems="left"
                w="50%"
                h="100vh"
                p="8em"
                spacing="2em"
              >
                <Heading fontSize="1.5em">{history.year} −</Heading>
                <Box>
                  <Text mb="0.5em">{history.organization}</Text>
                  <Heading fontSize="1.5em">{history.job}</Heading>
                </Box>
                <Box lineHeight="1.618em">{formatText(history.detail)}</Box>
              </VStack>
            </HStack>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Career;
