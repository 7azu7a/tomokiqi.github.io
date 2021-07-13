import { Flex, Text, Box, Image as ChakraImage } from '@chakra-ui/react';

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
  >
    <Box
      width={{ base: '70.72%', md: '29.28%' }}
      textAlign="justify"
      lineHeight="1.618em"
    >
      <ChakraImage
        src="/cover_message_title.png"
        alt="cover message title"
        height="8em"
        mr="1em"
        mb="1em"
        float="left"
      />
      <Text>
        この「克く（よく）」は困難を乗り越え励む様を、「佳く（よく）」は形が整い美しい様を意味するそうです。
        ところでアジャイル開発原則のひとつに「技術的卓越性と優れた設計に対する不断の注意が機敏さを高める」という言葉があります。技術を克く学びプロダクトを佳く作ること。それが人々へ真に価値あるモノを届けることに繋がると私は考えます。
        私の強みは「最上志向」「学習欲」「慎重さ」です。これら資質はクリフトンストレングス・テストで明らかになる以前、日々の仕事や趣味の中で自身感じていたものでもあります。私は自身の強みを以って克く学び佳く作ることで、人々に喜びや楽しさを届けることに努めていきます。
      </Text>
    </Box>
  </Flex>
);
