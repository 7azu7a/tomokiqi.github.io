import { IBlog } from "../../interfaces/blog";
import {
  Flex,
  Heading,
  Text,
  Image as ChakraImage,
  Skeleton,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  blog: IBlog;
};

export const BlogParts: React.VFC<Props> = ({ blog }) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const router = useRouter();

  const pushBlogPage = () => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="16em"
      bgColor="white"
      color="black"
      onClick={pushBlogPage}
      cursor="pointer"
      key={blog.id}
    >
      <Skeleton width="100%" height="70%" isLoaded={isLoadedImage}>
        <ChakraImage
          src={`${blog.cover.url}?dpr=2&w=256`}
          alt="cover image"
          width="100%"
          height="100%"
          objectFit="cover"
          onLoad={() => {
            setIsLoadedImage(true);
          }}
        />
      </Skeleton>
      <Flex direction="column" height="30%" justifyContent="center" p="1em">
        <Heading fontSize="1em" isTruncated mb="0.5em">
          {blog.title}
        </Heading>
        <Text fontSize="0.75em">
          {`最終更新：${dayjs(blog.updatedAt).format("YYYY/MM/DD")}`}
        </Text>
      </Flex>
    </Flex>
  );
};
