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
      justifyContent="left"
      alignItems="center"
      direction={{ base: 'column', sm: 'row' }}
      w="50%"
    >
      <ChakraImage
        alt="author photo"
        src={'/me.png'}
        width="10em"
        height="10em"
        objectFit="cover"
        mb={{ base: '2em', sm: '0px' }}
        mr={{ base: '0px', sm: '2em' }}
      />
      <VStack alignItems="flex-start" textAlign="justify">
        <Heading fontSize="1.25em" textAlign={{ base: 'center', sm: 'start' }}>
          西條 友喜
        </Heading>
        <Text>
          神奈川県横浜市（の田舎）出身。大学院卒業後に新卒入社した通信キャリアにて、自社サービスのフロントエンド開発や政府研究開発のシステム設計などを担当。認定スクラムマスター（CSM）の資格も保有。趣味はイタリアン料理と米国株投資。
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
