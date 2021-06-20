import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import {
  Flex,
  HStack,
  Box,
  Heading,
  Text,
  VStack,
  Image as ChakraImage,
} from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <ChakraImage
        alt="author photo"
        src={"/me.jpg"}
        width="8em"
        height="8em"
        objectFit="cover"
      />
      <VStack alignItems="flex-start" mx="2em">
        <Box mb="1em">
          <Heading fontSize="1em" mb="0.5em">
            西條 友喜
          </Heading>
          <Text fontSize="0.75em">
            通信キャリアにて自社サービスのフロントエンド開発や政府研究開発のシステム設計に従事。
            <br />
            Scrum Alliance®︎ 認定スクラムマスター。趣味はイタリアン料理など。
          </Text>
        </Box>
        <Box>
          <Text mb="0.75em" fontSize="0.75em">
            TypeScript ｜ React ｜ Next ｜ Express ｜ Scala ｜ Akka ｜ GitHub ｜
            Scrum Master
          </Text>
          <HStack spacing="0.75em">
            <Link href="https://twitter.com/tomokiqi">
              <a>
                <FaTwitter color="white" />
              </a>
            </Link>
            <Link href="https://github.com/tomokiqi">
              <a>
                <FaGithub color="white" />
              </a>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
};
