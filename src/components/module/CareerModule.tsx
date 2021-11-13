import { Flex, HStack, VStack, Heading, Text } from '@chakra-ui/react';

type Props = {
  year: string;
  organization: string;
  job: string;
};

export const CareerModule: React.VFC<Props> = ({ year, organization, job }) => {
  return (
    <HStack justifyContent="center" alignItems="center">
      <Flex w="160px" mr="2em">
        <Flex
          alignItems="center"
          justifyContent="center"
          transform="rotate(45deg)"
          borderColor="white"
          borderWidth="1px"
          width="113.14px"
          height="113.14px"
          ml="26.5px"
        >
          <Heading transform="rotate(-45deg)" fontSize="1.5em">
            {year}
          </Heading>
        </Flex>
      </Flex>

      <VStack alignItems="flex-start" textAlign="justify">
        <Heading fontSize="1.25em" textAlign={{ base: 'center', sm: 'start' }}>
          {organization}
        </Heading>
        <Text>{job}</Text>
      </VStack>
    </HStack>
  );
};
