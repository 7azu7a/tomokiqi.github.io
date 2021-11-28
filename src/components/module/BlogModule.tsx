import { IBlog } from '../../interfaces/blog';
import { Flex, Heading, Text, Skeleton } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  blog: IBlog;
};

export const BlogModule: React.VFC<Props> = ({ blog }) => {
  const router = useRouter();
  const [isLoadedImage, setIsLoadedImage] = useState(false);

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
      <Flex w="100%" h="70%" pos="relative">
        <Skeleton width="100%" height="70%" isLoaded={isLoadedImage}>
          <Image
            src={`${blog.cover.url}?dpr=2&w=256`}
            layout="fill"
            objectFit="cover"
            alt="blog cover"
            placeholder="empty"
            onLoad={() => {
              setIsLoadedImage(true);
            }}
          />
        </Skeleton>
      </Flex>
      <Flex
        direction="column"
        height="30%"
        justifyContent="space-between"
        p="1em"
      >
        <Heading fontSize="1em" isTruncated>
          {blog.title}
        </Heading>
        <Text fontSize="0.75em">
          {`最終更新：${dayjs(blog.updatedAt).format('YYYY/MM/DD')}`}
        </Text>
      </Flex>
    </Flex>
  );
};
