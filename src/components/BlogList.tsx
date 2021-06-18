import { IBlog } from "../interfaces/blog";
import dayjs from "dayjs";
import Image from "next/image";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";

export const BlogList = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <Flex mt="4rem" maxWidth="100%">
      {blogs.map((content) => (
        <Flex
          direction="column"
          width="32rem"
          height="16rem"
          bgColor="white"
          color="black"
          mx="2rem"
          key={content.id}
        >
          <Image
            src={content.cover.url}
            alt="cover-image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
          <Box flex="0.5" p="1rem">
            <Heading fontSize="1rem" isTruncated>
              {content.title}
            </Heading>
            <Text>{`最終更新：${dayjs(content.updatedAt).format(
              "YYYY/MM/DD"
            )}`}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
