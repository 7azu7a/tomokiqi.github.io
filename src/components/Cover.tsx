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
    userSelect="none"
    letterSpacing="0.25em"
    textAlign="justify"
    css={css`
      writing-mode: vertical-rl;
    `}
  >
    <Flex direction="column">
      <Heading fontSize="1.5em" justifyContent="flex-start">
        情熱の人であれ
      </Heading>
      <Text></Text>
    </Flex>
  </Flex>
);
