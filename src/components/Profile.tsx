import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Flex, HStack, Box, Heading, Text, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Image alt="my photo" src={"/me.jpg"} width="150%" height="150%" />
      <VStack alignItems="flex-start" mx="2rem">
        <Box mb="1rem">
          <Heading fontSize="1.5rem" mb="0.5em">
            西條 友喜
          </Heading>
          <Text>
            通信事業者にて新規事業サービスのフロントエンド開発や政府研究開発のシステム設計に従事。
            <br />
            Scrum Alliance®︎ 認定スクラムマスター。
          </Text>
        </Box>
        <Box>
          <Text mb="0.75em" fontSize="0.75rem">
            TypeScript ｜ React ｜ Next ｜ Express ｜ Scala ｜ Akka ｜ GitHub ｜
            Scrum Master
          </Text>
          <HStack spacing="0.75rem">
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
