import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const ValueList = () => {
  const valuesList = ["自由", "情熱", "専門性", "貢献", "合理的"];

  const ValueItem: React.VFC<{ value: string }> = ({ value }) => (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="8rem"
      height="8rem"
      borderWidth="2px"
      borderStyle="solid"
      borderColor="white"
      borderRadius="50%"
      mx="1rem"
    >
      <Text fontWeight="bold">{value}</Text>
    </Flex>
  );
  return (
    <Flex justifyContent="center" alignItems="center" mt="4rem">
      <Box>
        <Heading fontSize="1rem" mb="0.25rem">
          私が大切にしている価値観　
        </Heading>
        <Text fontSize="0.707">in Webox Value Cards</Text>
      </Box>
      {valuesList.map((value) => (
        <ValueItem value={value} key={value} />
      ))}
    </Flex>
  );
};
