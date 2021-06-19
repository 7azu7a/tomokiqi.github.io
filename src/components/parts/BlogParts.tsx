import { IBlog } from "../../interfaces/blog";
import { Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";

type Props = {
  blog: IBlog;
};

export const BlogParts: React.VFC<Props> = ({ blog }) => {
  const router = useRouter();

  const pushBlogPage = () => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <Flex
      direction="column"
      bgImg="/washi.jpeg"
      bgSize="100%"
      bgRepeat="no-repeat"
      color="black"
      onClick={pushBlogPage}
      cursor="pointer"
      key={blog.id}
    >
      <ChakraImage
        src={blog.cover.url}
        alt="cover image"
        width="100%"
        height="70%"
        objectFit="cover"
      />
      <Flex direction="column" height="30%" justifyContent="center" p="1rem">
        <Heading fontSize="1rem" isTruncated mb="0.5rem">
          {blog.title}
        </Heading>
        <Text fontSize="0.707rem">{`最終更新：${dayjs(blog.updatedAt).format(
          "YYYY/MM/DD"
        )}`}</Text>
      </Flex>
    </Flex>
  );
};
