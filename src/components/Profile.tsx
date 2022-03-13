import { Flex, Box, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export const Profile = () => {
  return (
    <Flex
      justifyContent="left"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      w="50%"
    >
      <Box
        minWidth="10em"
        minHeight="10em"
        pos="relative"
        mb={{ base: '2em', md: '0px' }}
        mr={{ base: '0px', md: '2em' }}
      >
        <Image
          src="/me.png"
          alt="author photo"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/me.png"
        />
      </Box>
      <VStack alignItems="flex-start" textAlign="justify">
        <Heading fontSize="1.25em" textAlign={{ base: 'center', md: 'start' }}>
          西條 友喜
        </Heading>
        <Text>Contact: tmk(at)ymail.ne.jp</Text>
        <Text>
          神奈川県横浜市（ただし田舎側）出身。フロントエンドエンジニア。株式・先物ひよっこトレーダー。資格として認定スクラムマスター。
        </Text>
        <Text mb="1em">
          JavaScript ｜ TypeScript ｜ React ｜ Next.js ｜ Storybook ｜ Node.js
          ｜ Express ｜ Serverless Framework ｜GitHub ｜ Scrum Master
        </Text>
      </VStack>
    </Flex>
  );
};
