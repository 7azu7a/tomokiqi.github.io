import { IBlog } from "../interfaces/blog";
import dayjs from "dayjs";
// import Image from "next/image";
import { Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";

export const BlogList = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <Flex mt="4rem" maxWidth="100%">
      {blogs.map((content) => (
        <Flex
          direction="column"
          width="32rem"
          height="24rem"
          bgImg="/washi.jpeg"
          bgSize="100%"
          bgRepeat="no-repeat"
          color="black"
          mx="2rem"
          key={content.id}
        >
          <ChakraImage
            src={content.cover.url}
            alt="cover-image"
            width="100%"
            height="70%"
            objectFit="cover"
          />
          <Flex
            direction="column"
            height="30%"
            justifyContent="center"
            p="1rem"
          >
            <Heading fontSize="1rem" isTruncated mb="0.5rem">
              {content.title}
            </Heading>
            <Text fontSize="0.707rem">{`最終更新：${dayjs(
              content.updatedAt
            ).format("YYYY/MM/DD")}`}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
