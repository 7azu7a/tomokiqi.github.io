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
        <Text>
          神奈川県横浜市（の田舎の方）出身。フロントエンドエンジニア。資格として認定スクラムマスター。趣味はイタリアン料理、米国株投資やドラマ・アニメ・バラエティ鑑賞など。
        </Text>
        <Text mb="1em">
          TypeScript ｜ React ｜ Vue.js ｜ Next.js ｜ Express ｜ GitHub ｜ Scrum
          Master ｜ etc.
        </Text>
      </VStack>
    </Flex>
  );
};
