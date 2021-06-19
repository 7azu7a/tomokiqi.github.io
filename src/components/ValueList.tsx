import { Flex, Box, Heading, Text } from "@chakra-ui/react";

export const ValueList = () => {
  const valuesList = ["最上志向", "学習欲", "慎重さ", "公平性", "親密性"];

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
    <Flex justifyContent="center" alignItems="center">
      <Box mr="1rem">
        <Heading fontSize="1rem" mb="0.25rem">
          私の強み
        </Heading>
        <Text fontSize="0.707">via CliftonStrengths</Text>
      </Box>
      {valuesList.map((value) => (
        <ValueItem value={value} key={value} />
      ))}
    </Flex>
  );
};
