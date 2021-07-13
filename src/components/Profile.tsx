import Link from 'next/link';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import {
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  Image as ChakraImage,
} from '@chakra-ui/react';

export const Profile = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={{ base: 'column', sm: 'row' }}
    >
      <ChakraImage
        alt="author photo"
        src={'/me.png'}
        width="10em"
        height="10em"
        mx="2em"
        my="1em"
        objectFit="cover"
      />
      <VStack alignItems="flex-start" textAlign="justify">
        <Heading fontSize="1.25em" textAlign={{ base: 'center', sm: 'start' }}>
          西條 友喜
        </Heading>
        <Text>
          通信キャリアにて自社サービスのフロントエンド開発や政府研究開発のシステム設計に従事。
          <br />
          Scrum Alliance®︎ 認定スクラムマスター。
        </Text>
        <Text mb="1em">
          TypeScript ｜ React ｜ Next ｜ Express ｜ GitHub ｜ Scrum Master
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
