import { Flex, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const Cover = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    width="100vw"
    height="100vh"
    color="black"
    bgRepeat="none"
    bgSize="100%"
    bgBlendMode="lighten"
    bgColor="whiteAlpha.500"
    bgImg="/paper.png"
    css={css`
      writing-mode: vertical-rl;
    `}
  >
    <Flex direction="column" userSelect="none">
      <Heading ml="2em" fontSize="1.5em">
        祇園精舎
      </Heading>
      <Text lineHeight="2em">
        祇園精舍の鐘の声、諸行無常の響きあり。
        <br />
        娑羅双樹の花の色、盛者必衰の理をあらはす。
        <br />
        おごれる人も久しからず、ただ春の夜の夢のごとし。
        <br />
        猛き者もつひには滅びぬ、ひとへに風の前の塵に同じ。
      </Text>
    </Flex>
  </Flex>
);
