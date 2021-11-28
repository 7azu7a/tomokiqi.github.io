import { Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
  year: string;
  organization: string;
  job: string;
};

export const CareerModule: React.VFC<Props> = ({ year, organization, job }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        borderColor="white"
        borderWidth="1px"
        borderRadius="50%"
        minWidth="10em"
        minHeight="10em"
        mr={{ base: '0em', md: '2em' }}
      >
        <Heading fontSize="1.5em">{year}</Heading>
      </Flex>
      <Flex
        justifyContent="center"
        textAlign="start"
        flexDirection="column"
        h="10em"
      >
        <Heading
          fontSize="1.25em"
          textAlign={{ base: 'center', md: 'start' }}
          mb="0.5em"
        >
          {organization}
        </Heading>
        <Text>{job}</Text>
      </Flex>
    </Flex>
  );
};
