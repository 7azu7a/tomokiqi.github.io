import { Flex, Heading, Text } from "@chakra-ui/react";

export const ValueList = () => {
  const valuesList = ["最上志向", "学習欲", "慎重さ", "公平性", "親密性"];

  const ValueItem: React.VFC<{ value: string }> = ({ value }) => (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="8em"
      height="8em"
      borderWidth="2px"
      borderStyle="solid"
      borderColor="white"
      borderRadius="50%"
      m="1em"
    >
      <Text fontWeight="bold">{value}</Text>
    </Flex>
  );
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", sm: "row" }}
      width="100%"
    >
      <Flex m="1em" alignItems="center" direction="column">
        <Heading fontSize="1em" mb="0.25em">
          私の強み
        </Heading>
        <Text fontSize="0.75">via CliftonStrengths</Text>
      </Flex>
      {valuesList.map((value) => (
        <ValueItem value={value} key={value} />
      ))}
    </Flex>
  );
};
