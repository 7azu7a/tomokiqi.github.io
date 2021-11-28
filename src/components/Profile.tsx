import Link from 'next/link';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Flex, Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
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
          神奈川県出身。大学院卒業後に新卒入社した通信キャリアにて自社サービスのフロントエンド開発を担当。2020年に認定スクラムマスターを資格取得。趣味はイタリアン料理、米国株投資やアニメ・バラエティ鑑賞など。
        </Text>
        <Text mb="1em">
          TypeScript ｜ React ｜ Vue.js ｜ Next.js ｜ Express ｜ GitHub ｜ Scrum
          Master
        </Text>
        <HStack spacing="0.75em">
          <Link href="https://github.com/tomokiqi">
            <a>
              <FaGithub color="white" />
            </a>
          </Link>
          <Link href="https://twitter.com/tomokiqi">
            <a>
              <FaTwitter color="white" />
            </a>
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};
