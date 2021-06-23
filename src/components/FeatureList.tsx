import { Flex, VStack, Heading, Text } from "@chakra-ui/react";

export const FeatureList = () => {
  const strengthList = ["最上志向", "学習欲", "慎重さ", "公平性", "親密性"];
  const valueList = ["自由", "情熱", "専門性", "貢献", "合理的"];

  type ItemProps = {
    text: string;
  };

  const Item: React.VFC<ItemProps> = ({ text }) => (
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
      <Text fontWeight="bold">{text}</Text>
    </Flex>
  );

  type ItemListProps = {
    itemList: string[];
    title: string;
    subTitle: string;
  };

  const ItemList: React.VFC<ItemListProps> = ({
    itemList,
    title,
    subTitle,
  }) => (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      width="100%"
    >
      <Flex m="1em" alignItems="center" direction="column">
        <Heading fontSize="1em" mb="0.25em">
          {title}
        </Heading>
        <Text fontSize="0.75em">{subTitle}</Text>
      </Flex>
      {itemList.map((item) => (
        <Item text={item} key={item} />
      ))}
    </Flex>
  );
  return (
    <VStack width="100%">
      <ItemList
        itemList={strengthList}
        title={"私の強み"}
        subTitle={"via CliftonStrengths"}
      />
      <ItemList
        itemList={valueList}
        title={"私のバリュー"}
        subTitle={"via WevoxValueCard"}
      />
    </VStack>
  );
};
