import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import { CareerPageHeader } from 'components/CareerPageHeader';
import { career } from 'constant/myCareer';
import { ICareer } from 'interfaces/career';

const Career: React.VFC = () => {
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
      h={{ base: '30vh', lg: '100vh' }}
    />
  );

  const CareerDetail = ({ history }: { history: ICareer }) => (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="left"
      w={{ base: '100%', lg: '50%' }}
      h={{ base: '', lg: '100vh' }}
      p={{ base: '2em', lg: '4em' }}
      minHeight="70vh"
    >
      <Heading fontSize="1.5em" mb="1em">
        {history.year} −
      </Heading>
      <Box mb="2em">
        <Text mb="0.5em" fontSize="1.25em">
          {history.organization}
        </Text>
        <Heading fontSize="1.5em">{history.job}</Heading>
      </Box>
      <Box lineHeight="1.618em">{formatText(history.detail)}</Box>
    </Flex>
  );

  const formatText = (msg: string) => {
    return msg
      .split(/(\n)/g)
      .map((text, index) => (text === '\n' ? <br key={index} /> : text));
  };

  return (
    <Flex w="100%" flexDirection="column">
      <Box pos="fixed" top="2em" mx="2em" zIndex={1}>
        <CareerPageHeader />
      </Box>

      <Flex w="100%">
        <Flex w="100%" flexDirection="column">
          {career.map((history) => (
            <Flex
              w="100%"
              key={history.year}
              flexDirection={{ base: 'column', lg: 'row' }}
            >
              <Flex w={{ base: '100%', lg: '50%' }}>
                <EyeCatchImage imagePath={history.cover} />
              </Flex>
              <CareerDetail history={history} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Career;
