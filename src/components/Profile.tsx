import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Flex, HStack, Box, Heading, Text, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex justifyContent="center" alignItems="center" mt="4rem">
      <Image alt="my photo" src={"/me.jpg"} width="150%" height="150%" />
      <VStack m="2rem" alignItems="flex-start">
        <Box mb="1rem">
          <Heading fontSize="1.414rem" mb="0.25em">
            西條 友喜
          </Heading>
          <Text>
            ソフトバンク株式会社にて新規事業領域のフロントエンド開発や政府研究開発のシステム設計に従事。
            <br />
            Scrum Alliance®︎ 認定スクラムマスター。
          </Text>
        </Box>
        <Box>
          <Text mb="0.25em">
            React ｜ Next ｜ Express ｜ Akka ｜ GitHub ｜ Scrum Master
          </Text>
          <HStack spacing={2}>
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
